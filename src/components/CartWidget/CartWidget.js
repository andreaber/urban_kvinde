import cart from '../../assets/shopping-bag.svg'
import './CartWidget.scss'

const CartWidget = () => {

  return (  
    <div className='cart-widget'>
      <img src={cart} alt="cart" className='cart-icon' />
      <span>0</span>
    </div>
  )
}

export default CartWidget;