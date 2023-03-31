import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx'
import Login from './components/Login/Login.jsx';
import Detail from './components/Detail/Detail.jsx';
import style from "./App.module.css";
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const username = "ciangianluca@hotmail.com"
  const password = "123456789" 
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  
  const onSearch = (id) => {
       
    
    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }
    
    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
    });
  };


  const login = (userData) => { 
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }else {
      alert('Credenciales incorrectas');
    }
  }


  
 const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id));
 }


  return (
    <>
    <div className={style.app}> 
        <Nav onSearch={onSearch}/>
      <div className={style.nav} >
        <Routes>
          <Route path='/' element={<Login login={login}/>}/>
          <Route path='/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/detail/:detailId' element = {<Detail/>}/>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
