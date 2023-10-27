import "./App.css";

//Reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

//Navegando entre links
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer"
// import Footer from "../components/footer/Footer"

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
