import SearchBar from "../SearchBar/SearchBar.jsx"
import { Component } from "react";
import { Link } from 'react-router-dom'
import style from "./Nav.module.css";



class Nav extends Component {
    constructor(props) {
        super(props);
    }
        render() { 
            return ( 
            <>
                <div className={style.nav}>
                    <div className={style.searchbar}>
                    <SearchBar onSearch={this.props.onSearch}/>
                    </div>
                    <div className={style.links}>
                        <Link to='/home'>
                            <h3 className={style.text}>Home</h3>
                        </Link>
                        <Link to='/about'>
                            <h3 className={style.text}>About</h3>
                        </Link>
                        <Link to='/detail'>
                            <h3 className={style.text}>Detail</h3>
                        </Link>
                        <Link to='/login'>
                            <h3 className={style.text}>Login</h3>
                        </Link>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Nav;