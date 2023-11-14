import style from "./Home.module.css"
import spot from "../../assets/spot.svg"
import casa from "../../assets/casa.svg"
import  search  from "../../assets/search.svg"
import mais from "../../assets/mais.svg"
import livro from "../../assets/livro.svg"
import seta1 from "../../assets/seta1.svg"
import seta2 from "../../assets/seta2.svg"
import nota from "../../assets/nota.png"
import Card from "../../components/card/Card"
import Button from "../../components/button/Button"
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
        <div className={style.pesquisa}>
           <img className={style.search}
        src={search}
        alt="imagem de uma lupa"


        />
      </div>
      </div>

      <div className={style.play}>

      <Link> <img className={style.mais}
               src={mais}
               alt="imagem de um +"
               />
                </Link>
                
     <Link> <img className={style.livro}
        src={livro}
        alt="imagem de livros enfilerados"
        />
        </Link>

        <div className={style.criar}>
          <p>Crie a sua primeira playlist</p>
          <p>É fácil, nós ajudamos</p>
         <Link><h1>Criar playlist</h1></Link> 
        </div>


        <div className={style.podcast}>
          <p>Vamos lá encontrar alguns podcasts para seguir</p>
          <p>Vamos atualiza-lo sobre os novos episódios</p>
          <Link><h1>Procurar podcasts</h1></Link>
          
          </div>

        



      </div>


      


               
     
        
<div className={style.musics}>
<div className={style.bar}>
        <div className={style.setas}>
       <Link><img className={style.seta1}
                src={seta1}
                alt="imagem de uma seta para a direita"
                /></Link> 
                  <Link> <img className={style.seta2}
                src={seta2}
                alt="imagem de uma seta para a esquerda"
                /></Link>
                </div>
        <a href="">Inscrever-se</a> <button>Entrar</button>
      </div>
<div className={style.cards}>
<Card img={nota}title="Música" children="Breve descrição da música"/>
<Card img={nota}title="Música" children="Breve descrição da música"/>
<Card img={nota} title="Música"children="Breve descrição da música"/>
<Card img={nota}title="Música" children="Breve descrição da música"/>

  
</div>


      

</div>

      </div>
      
    

  )
}

export default Home