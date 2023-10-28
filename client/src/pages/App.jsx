import "./App.module.css";
import { Link } from "react-router-dom"


import { Outlet } from "react-router-dom";

import Nav from "../components/nav/Nav";

const App = () => {
  return (
    <div className="App">
      
         <Link to="/">Home</Link>
        
        <Link to="/entrar">Entrar</Link>
        <Link to="/insc">Insc</Link>
       
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
