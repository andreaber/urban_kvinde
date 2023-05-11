import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import requestData from '../../helpers/requestData'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    requestData()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return ( 
    <div className="list-container">

      {
        loading
          ? <h2>Cargando...</h2>
          : <ItemList items={products}/>
      }
    </div>
  )
}

export default ItemListContainer