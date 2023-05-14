import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { db } from "../../firebase/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    // 1. armo la ref (sync)
    const docRef = doc(db, 'productos', itemId)
    // 2. llamo a la ref (sync)
    getDoc(docRef)
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data()
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  return (  
    <div className="container">
      {
        loading
          ? <Loader />
          : <ItemDetail item={item} />
      }
    </div>
  )
}

export default ItemDetailContainer