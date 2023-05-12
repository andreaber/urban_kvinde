


const ItemDetail = ( {item} ) => {

  return (
    <div>
      <h2>{item.name}</h2>
      <hr />
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <small>Stock: {item.stock}</small>
      <br />
      <small>Categoría: {item.category}</small>
    </div>
  )
}

export default ItemDetail