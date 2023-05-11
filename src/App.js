import './App.scss'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  return (
    <div>
      <Navbar />
      <ItemListContainer />

      <Footer />
    </div>
  )
}

export default App
