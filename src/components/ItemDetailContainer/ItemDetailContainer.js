import { useEffect, useState } from "react"
import requestData from "../../helpers/requestData"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  console.log(item)
  console.log(itemId)

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
          ? <h2>Cargando...</h2>
          : <ItemDetail item={item} />
      }
    </div>
  )
}

export default ItemDetailContainer