import style from "./Home.module.css"
import spot from "../../assets/spot.svg"
import casa from "../../assets/casa.svg"
import  search  from "../../assets/search.svg"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <img className={style.logo}
        src={spot}
        alt="imagem do spotify"

        />
        <img className={style.casa}
        src={casa}
        alt="imagem de uma pequena casa"


        />

           <img className={style.search}
        src={search}
        alt="imagem de uma lupa"


        />
      </div>
      </div>
    

  )
}

export default Home