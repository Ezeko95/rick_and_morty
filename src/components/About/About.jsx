import style from './About.module.css'


export default function About() {
    return (
        
        <div className={style.about}>
            <h1 className={style.h1}>Mi Proyecto Inclusivo de Rick & Morty</h1>
            <h2 className={style.h2}>Creado por: Gianluca Cianchi</h2>
            <p className={style.p}>Este proyecto me ha costado considerable esfuerzo y aun no esta terminado.</p>
        </div>
        
    )
}