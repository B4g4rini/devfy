import style from "./Home.module.css"
import spot from "../../assets/spot.svg"
import casa from "../../assets/casa.svg"
import  search  from "../../assets/search.svg"
import mais from "../../assets/mais.svg"
import livro from "../../assets/livro.svg"
import seta1 from "../../assets/seta1.svg"
import seta2 from "../../assets/seta2.svg"

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
        
        {/* <p>Registrar-se</p>
        <h6>iniciar sessão</h6> */}

<Link><img className={style.seta1}
        src={seta1}
        alt="imagem de uma seta para a direita"
        /></Link>
       <Link> <img className={style.seta2}
        src={seta2}
        alt="imagem de uma seta para a esquerda"
        /></Link>
      </div>
<div className={style.musics}>
        

</div>
      </div>
    

  )
}

export default Home