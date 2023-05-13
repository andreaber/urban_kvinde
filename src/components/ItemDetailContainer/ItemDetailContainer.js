import { useEffect, useState } from "react"
import requestData from "../../helpers/requestData"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    requestData()
      .then((res) => {
        setItem( res.find((prod) => prod.id === Number(itemId)) )
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