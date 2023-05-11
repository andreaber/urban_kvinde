import './Item.scss'

const Item = ( {item} ) => {

  return (  
    <div className='col-3 m-2'>
      <h2 className='name-title'>{item.name}</h2>
      <div className='img-container'>
        <img src={item.imageUrl} alt='producto' className='img-url' />
      </div>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <button className='btn btn-secondary'>Ver más</button>
    </div>
  )
}

export default Item