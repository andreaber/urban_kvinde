import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"


const Checkout = () => {
  const { cart, totalCart } = useContext(CartContext)

  const [values, setValues] = useState({
    nombre: '',
    direccion: '',
    email: ''
  })

  const handleInputChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // validaciones
    if (values.nombre.length < 3) {
      alert('El nombre es muy corto')
      return 
    }
    if (values.direccion.length < 6) {
      alert('La dirección es muy corta')
      return 
    }
    if (!values.email.includes('@')) {
      alert('El correo electrónico no es válido')
      return 
    }

    const order = {
      cliente: values,
      items: cart,
      total: totalCart(),
      fyh: new Date()
    }

    console.log(order)
  }

  return (
    <div className="container my-5">
      <h2>Ingresa tus datos</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input 
          value={values.nombre}
          onChange={handleInputChange}
          name='nombre'
          type="text"
          className="form-control my-2"
          placeholder="Tu nombre"
        />
        
        <input 
          value={values.direccion}
          onChange={handleInputChange}
          name='direccion'
          type="text"
          className="form-control my-2"
          placeholder="Tu dirección"
        />

        <input 
          value={values.email}
          onChange={handleInputChange}
          name='email'
          type="email"
          className="form-control my-2"
          placeholder="Tu email"
        />

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default Checkout