import { Link } from 'react-router-dom'
import './Item.scss'

const Item = ( {item} ) => {

  return (  
    <div className='col-3 m-4 item-container'>
      <h2 className='name-title'>{item.name}</h2>
      <div className='img-container'>
        <img src={item.imageUrl} alt='producto' className='img-url' />
      </div>
      <p>Precio: ${item.price}</p>
      <Link to={`/detail/${item.id}`} className='btn btn-secondary'>Ver más</Link>
    </div>
  )
}

export default Item