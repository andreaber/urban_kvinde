import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import useProducts from '../../hooks/useProducts'



const ItemListContainer = () => {

  const {products, loading} = useProducts()

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