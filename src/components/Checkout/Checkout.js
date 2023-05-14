import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"
import { Navigate } from "react-router-dom"
import { collection, documentId, addDoc, where, query, getDocs, writeBatch } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { Formik } from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, '¡Demasiado corto!')
    .max(30, '¡Demasiado largo!')
    .required('Este campo es obligatorio'),
  direccion: Yup.string()
    .min(6, '¡Demasiado corto!')
    .max(30, '¡Demasiado largo!')
    .required('Este campo es obligatorio'),
  email: Yup.string()
    .email('Este correo electrónico no es válido')
    .required('Este campo es obligatorio')
})

const Checkout = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)

  const generateOrder = async (values) => {
    const order = {
      cliente: values,
      items: cart,
      total: totalCart(),
      fyh: new Date()
    }

    const batch = writeBatch(db)

    const ordersRef = collection(db, 'orders')
    const productsRef = collection(db, 'productos')
    const q = query(productsRef, where(documentId(), 'in', cart.map(item => item.id)))

    const outOfStock = []

    const products = await getDocs(q)

    products.docs.forEach((doc) => {
      const item = cart.find((prod) => prod.id === doc.id)
      
      if (doc.data().stock >= item.quantity) {
        batch.update(doc.ref, {
          stock: doc.data().stock - item.quantity
        })
      } else {
        outOfStock.push(item)
      }
    })

    if (outOfStock.length === 0) {
      await batch.commit()
      const { id } = await addDoc(ordersRef, order)
      setOrderId(id)
      emptyCart()
    } else {
      Swal.fire('Hay items sin stock: ' + outOfStock.map(i => i.name).join(', '))
    }
  }

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>¡Tu compra se registró exitosamente!</h2>
        <hr />
        <p>Guarda tu número de orden: <strong>{orderId}</strong></p>
      </div>
    )
  }

  if (cart.length === 0) {
    return <Navigate to='/' />
  }

  return (
    <div className="container my-5">
      <h2>Ingresa tus datos</h2>
      <hr />

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          nombre: '',
          direccion: '',
          email: ''
        }}
        onSubmit={generateOrder}
      >
        {({values, errors, touched, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <input 
                value={values.nombre}
                onChange={handleChange}
                name='nombre'
                type="text"
                className="form-control my-2"
                placeholder="Tu nombre"
              />
              {errors.nombre && touched.nombre ? <p style={{color:'red'}}>{errors.nombre}</p> : null}
              
              <input 
                value={values.direccion}
                onChange={handleChange}
                name='direccion'
                type="text"
                className="form-control my-2"
                placeholder="Tu dirección"
              />
              {errors.direccion && touched.direccion ? <p style={{color: 'red'}}>{errors.direccion}</p> : null}

              <input 
                value={values.email}
                onChange={handleChange}
                name='email'
                type="email"
                className="form-control my-2"
                placeholder="Tu email"
              />
              {errors.email && touched.email ? <p style={{color: 'red'}}>{errors.email}</p> : null}

              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>)}
      </Formik>
    </div>
  )
}

export default Checkout

    // validaciones
    // if (values.nombre.length < 3) {
    //   Swal.fire('El nombre es muy corto')
    //   return 
    // }
    // if (values.direccion.length < 6) {
    //   Swal.fire('La dirección es muy corta')
    //   return 
    // }
    // if (!values.email.includes('@')) {
    //   Swal.fire('El correo electrónico no es válido')
    //   return 
    // }