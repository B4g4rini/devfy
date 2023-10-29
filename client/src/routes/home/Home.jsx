import style from "./Home.module.css"
import spot from "../../assets/spot.svg"
import casa from "../../assets/casa.svg"
import  search  from "../../assets/search.svg"
import mais from "../../assets/mais.svg"
import livro from "../../assets/livro.svg"
import { Link } from "react-router-dom"



const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
      <Link to="/init">Início </Link>
        
        <Link to="/search">Procurar</Link>
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

      <div className={style.play}>

        <img className={style.mais}
               src={mais}
               alt="imagem de um +"
               />
      <img className={style.livro}
        src={livro}
        alt="imagem de livros enfilerados"
        />



      </div>


      <div className={style.login}>

      </div>
<div className={style.musics}>
{/* <img className={style.direita}
        src={direita}
        alt="imagem de uma seta para a direita"
        />
        <img className={style.esquerda}
        src={esquerda}
        alt="imagem de uma seta para a esquerda"
        /> */}
        

</div>
      </div>
    

  )
}

export default Home