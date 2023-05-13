import { useContext } from 'react'
import cartshop from '../../assets/shopping-bag.svg'
import './CartWidget.scss'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {totalQuantity, cart} = useContext(CartContext)

  return (  
    <Link to='/cart' className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
      <img src={cartshop} alt="cart shop" className='cart-icon' />
      <span>{totalQuantity()}</span>
    </Link>
  )
}

export default CartWidget