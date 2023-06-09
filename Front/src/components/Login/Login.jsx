import { useState } from "react";
import validation from "./validation.js";
import styled from './Login.module.css'

const Login = ({login}) => {

    const [userData, setUserData] = useState({ 
        username: "", 
        password: ""
    });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });


    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value })
        validation({ ...userData, [property]: value }, errors, setErrors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    }




    return (
        <form onSubmit={submitHandler}>
            <div className={styled.div1}>
                <label htmlFor="username">Usuario:</label>
                <input 
                type='text' 
                name="username"
                value={userData.username} 
                onChange={handleInputChange}
                />
            </div>
            <div className={styled.div2}>
                <label htmlFor="password">Contraseña:</label>
                <input 
                type='text'
                name="password" 
                value={userData.password} 
                onChange={handleInputChange}
                />
            </div>
            <div className={styled.div3}>
                <button type='submit'>Login</button>
            </div>
        </form>
    )

}

export default Login;