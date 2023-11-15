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
        <input placeholder='O que você quer ouvir?' type="text" />
        </Button>
      </div>
  )
}

export default Procurar