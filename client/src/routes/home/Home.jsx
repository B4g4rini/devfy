import style from "./Home.module.css"
import spot from "../../assets/spot.svg"

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <img className={style.logo}
        src={spot}
        alt="imagem do spotify"
        />

        


      </div>
    
    </div>
  )
}

export default Home