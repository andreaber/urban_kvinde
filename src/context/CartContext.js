import { createContext, useState } from "react"


export const CartContext = createContext()

// CartContext.Provider
export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      isInCart,
      totalQuantity,
      emptyCart,
      removeItem,
      totalCart
    }}>
      {children}
    </CartContext.Provider>
  )
}