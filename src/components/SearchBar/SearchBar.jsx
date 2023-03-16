import style from './SearchBar.module.css'
import {useState} from 'react';

export default function SearchBar({onSearch}){
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   };


   return (
      <div className={style.bar}>
         <input type='text' onChange={handleChange} className={style.input}/>
         <button className={style.button} onClick={() => onSearch(id)}>
            Search
         </button>
      </div>
   );
}


