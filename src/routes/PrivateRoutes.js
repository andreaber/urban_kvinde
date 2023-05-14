import { Fragment } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Cart from "../components/Cart/Cart"
import Nosotros from "../components/Nosotros/Nosotros"
// import Error404 from "../Error404/Error404"
import Footer from "../components/Footer/Footer"
import Checkout from "../components/Checkout/Checkout"


const PrivateRoutes = () => {

  return (
    <Fragment>
      <Navbar />
          
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='/cart' element={ <Cart /> } /> 
        <Route path='/checkout' element={ <Checkout /> } />
        <Route path='/nosotros' element={ <Nosotros /> } />
        <Route path="*" element={ <Navigate to={'/'} /> } />
        {/* <Route path='/contacto' element={ <Contacto /> } />  
        <Route path='*' element={ <Error404 /> } /> */}
      </Routes>

      <Footer />
    </Fragment>
  )
}

export default PrivateRoutes