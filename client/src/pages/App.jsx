import "./App.module.css";
import { Outlet } from "react-router-dom";
import Home from "../routes/home/Home"




const App = () => {
  return (
    <div className="App">

      
      
         
        <Home/>
       
      <Outlet />
    </div>
  );
};

export default App;
