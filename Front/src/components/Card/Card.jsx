import style from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card({id, name, species, gender, image, onClose}) {
   
   return (
      <div className = {style.divCard}>
         <button className={style.button}onClick={() => onClose(id)}>X</button>
         <img className={style.img} src={image} alt=""/>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2 className={style.text}>Species: {species}</h2>
         <h2 className={style.text}>Gender: {gender}</h2>
      </div>
   );
}
