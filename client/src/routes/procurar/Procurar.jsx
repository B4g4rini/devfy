import style from "./Procurar.module.css"
import search from "../../assets/search.svg"
import Button from "../../components/button/Button"
const Procurar = () => {
  return (
    <div className="Search">
      
         <Button>  <img className={style.search}
        src={search}
        alt="imagem de uma lupa"
        
        />
        </Button>
        {/* <p>O que deseja ouvir?</p> */}

      </div>
  )
}

export default Procurar