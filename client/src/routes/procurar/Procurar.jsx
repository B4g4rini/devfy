import style from "./Procurar.module.css"
import search from "../../assets/search.svg"
import Button from "../../components/button/Button.jsx"
const Procurar = () => {
  return (
    <div className="Search">
      
         <Button>  <img className={style.search}
        src={search}
        alt="imagem de uma lupa"
        
        />
        <p>O que deseja ouvir?</p>
        </Button>
      </div>
  )
}

export default Procurar