import style from "./Search.module.css"
import { Link } from "react-router-dom"
const Search = () => {
  return (
    <div className={style.Search}>
        <input placeholder='O que você quer ouvir?' type="text" />

      
        
    </div>
  )
}

export default Search 