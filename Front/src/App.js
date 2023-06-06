import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Login from "./components/Login/Login.jsx";
import Detail from "./components/Detail/Detail.jsx";
import style from "./App.module.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { username, password } from "./utils/const.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }
    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id)); // porque filtrer no modifica el array original
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <>
      <div className={style.app}>
        {pathname !== "/" && <Nav onSearch={onSearch} />}
        <div className={style.nav}>
          <Routes>
            <Route path="/" element={<Login login={login} />} />
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:detailId" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
