


const ItemCount = ( {stock, quantity, setQuantity, add} ) => {

  const handleSubstract = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }

  const handleSum = () => {
    quantity < stock && setQuantity(quantity + 1)
  }
  
  return (
    <div>
      <button 
        onClick={handleSubstract} 
        className={`btn
        ${quantity === 1 ? 'minimo' : ''}
        ${quantity === 1 ? 'btn btn-outline-dark' : 'btn btn-outline-primary'}`}
        disabled={quantity === 1}
      >
        -
      </button>

      <span className="mx-3">{quantity}</span>

      <button 
        onClick={handleSum} 
        className={quantity === stock ? 'btn btn-dark' : 'btn btn-primary'}
        disabled={quantity === stock || stock === 0}
      >
        +
      </button>

      <br />

      {stock === 0 ? (
        <h5><strong>No hay stock de este producto</strong></h5>
      ) : (
        <button onClick={add} className="btn btn-success">Agregar al carrito</button>
      )}

      {/*<button disabled={stock === 0} onClick={add} className="btn btn-success">Agregar al carrito</button>*/}
    </div>
  )
}

export default ItemCount