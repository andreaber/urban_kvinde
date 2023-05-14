import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"
import { Navigate } from "react-router-dom"
import { collection, documentId, addDoc, where, query, getDocs, writeBatch } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"


const Checkout = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    // validaciones
    if (values.nombre.length < 3) {
      Swal.fire('El nombre es muy corto')
      return 
    }
    if (values.direccion.length < 6) {
      Swal.fire('La dirección es muy corta')
      return 
    }
    if (!values.email.includes('@')) {
      Swal.fire('El correo electrónico no es válido')
      return 
    }

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
      // batch.commit()
      //   .then(() => {
      //     addDoc(ordersRef, order)
      //       .then((doc) => {
      //         setOrderId(doc.id)
      //         emptyCart()
      //       })
      //   })
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



// cart.forEach((item) => {
//   console.log(item)
//   const docRef = doc(db, 'productos', item.id)

//   getDoc(docRef)
//     .then((doc) => {
//       let stock = doc.data().stock
//       if(stock - item.quantity >= 0) {
//         updateDoc(docRef, {
//           stock: stock - item.quantity
//         })
//       } else {
//         Swal.fire('No hay stock de ' + doc.data().name)
//       }
//     })
// })