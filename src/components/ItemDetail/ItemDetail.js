import { Fragment, useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import Select from '../Select/Select'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'


const sizes = [
  {
    value: 'small',
    label: 'S'
  },
  {
    value: 'medium',
    label: 'M'
  },
  {
    value: 'large',
    label: 'L'
  }
]

const ItemDetail = ( {item} ) => {
  const { addToCart, isInCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('sizes[0].value')

  const handleAdd = () => {
    const newItem = {
      ...item,
      quantity,
      size
    }

    addToCart(newItem)
  }

  // const assemblyDate = useMemo(() => {
  //   return new Date()
  // }, []) 

  return (
    <div className="container">
      <h2>{item.name}</h2>
      <hr />
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.description}</p>
      {item.stock <= 5 && <p><strong>¡Quedan sólo {item.stock} unidades!</strong></p>}
      <p>Precio: ${item.price}</p>

      {/* <p>Fecha de montaje: {assemblyDate.toLocaleString()}</p>
      <Memo /> */}

      {item.stock > 0 && (
        <Fragment>
          <p>Talles disponibles:</p>
          <Select 
            set={setSize}
            options={sizes} 
          />
        </Fragment>
      )}

      {
        isInCart(item.id)
            ? <Link to='/cart' className='btn btn-success'>Terminar mi compra</Link>
            : <ItemCount 
                stock={item.stock}
                quantity={quantity}
                setQuantity={setQuantity}
                add={handleAdd}
              />
      }

    </div>
  )
}

export default ItemDetail