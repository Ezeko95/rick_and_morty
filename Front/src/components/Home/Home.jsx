import style from './Home.module.css';
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';


export default function Home() {
    return(
        <div className={style.home}>
            <Link to= '/home'>Home</Link>
            <Cards></Cards>
        </div>
    );
}