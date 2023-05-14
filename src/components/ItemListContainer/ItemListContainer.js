import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(products)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    // 1. armar una referencia (sync)
    const productsRef = collection(db, 'productos')
    const q = categoryId
                ? query(productsRef, where('category', '==', categoryId))
                : productsRef
    // 2. llamar a esa referencia (async) ---> promesa y resolu de la asincronia
    getDocs(q)
      .then((res) => {
        setProducts(res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }))
      })
      .finally(() => setLoading(false))

  }, [categoryId])

  return ( 
    <div className="list-container my-5">
      {
        loading 
          ? <Loader />
          : <ItemList items={products}/>
      }
    </div>
  )
}

export default ItemListContainer