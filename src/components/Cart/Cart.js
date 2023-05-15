import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { TfiTrash } from 'react-icons/tfi'
import { Link } from "react-router-dom"
import './Cart.scss'


const Cart = () => {
  const { cart, emptyCart, removeItem, totalCart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>No tienes productos agregados</h2>
        <hr />
        <Link to='/' className="btn btn-primary">Volver</Link>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <h2>Tu compra</h2>
      <hr />

      {
        cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <img src={item.imageUrl} alt="imagen producto" />
            <div>
              <small>Cantidad: {item.quantity}</small>
              <br />
              <small>Precio unitario: ${item.price}</small>
            </div>
            <p>Precio total: ${item.price * item.quantity}</p>
            <button onClick={() => removeItem(item.id)} className="btn btn-danger"><TfiTrash /></button>
            <hr />
          </div>
        ))
      }

      <h3>TOTAL: ${totalCart()}</h3>
      <button onClick={emptyCart} className="btn btn-danger m-2">Vaciar carrito</button>
      <Link to='/checkout' className="btn btn-success m-2">Terminar mi compra</Link>
    </div>
  )
}

export default Cart