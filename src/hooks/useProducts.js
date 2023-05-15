import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'


const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

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

  return {products, loading}
}

export default useProducts