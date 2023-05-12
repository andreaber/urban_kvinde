import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import Error404 from './Error404/Error404'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='/nosotros' element={ <Nosotros /> } />
        <Route path='/contacto' element={ <Contacto /> } /> 
        <Route path='*' element={ <Error404 /> } />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
