import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/entrar">Entrar</Link>
        <Link to="/insc">Insc</Link>

    </div>
  )
}

export default Nav