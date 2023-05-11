import Item from "../Item/Item"
import './ItemList.scss'

const ItemList = ( {items} ) => {

  return (  
    <div>
      <h2 className="list-container_title">Shop</h2>
      <hr />

      <div className='row'>
        { items.map((product) => <Item key={product.id} item={product} />)}
      </div>
    </div>
  )
}

export default ItemList