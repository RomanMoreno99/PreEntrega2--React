import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="cardProducto">
        <img className="imgProducto" src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <div className='btnProducto'>
        <Link to={`/item/${id}`} > Ver Detalles </Link>
        </div>
    </div>
  )
}

export default Item
