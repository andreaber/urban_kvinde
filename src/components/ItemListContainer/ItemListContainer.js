import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import requestData from '../../helpers/requestData'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()
  console.log(categoryId)

  useEffect(() => {
    setLoading(true)

    requestData()
      .then((res) => {
        if (categoryId) {
          setProducts(res.filter((prod) => prod.category === categoryId))
        } else {
          setProducts(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

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