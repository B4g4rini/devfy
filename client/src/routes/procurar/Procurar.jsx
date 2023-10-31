import style from "./Procurar.module.css"
import search from "../../assets/search.svg"
const Procurar = () => {
  return (
    <div className={style.search}>
           <img className={style.search}
        src={search}
        alt="imagem de uma lupa"


        />
      <p>O que deseja ouvir?</p>

      </div>
  )
}

export default Procurar