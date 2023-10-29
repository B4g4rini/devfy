import "./App.module.css";
import { Outlet } from "react-router-dom";
import Home from "../routes/home/Home"
import Nav from "../components/nav/Nav";




const App = () => {
  return (
    <div className="App">
          {/* <Link to="/insc"><a>I</a></Link> */}

      
      
         
        <Home/>
       
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
