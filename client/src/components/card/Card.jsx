import style from "./Card.module.css";

const Card = ({ children, img, title }) => {
 
  return (
 <div className={style.card}>
        <img src={img} alt="" />
        <div className={style.play}><ion-icon name="play"></ion-icon></div>
        <div className={style.cont}>
        <p>{children}</p>
        <h4>{title}</h4>
        </div>
    </div>
  );
};

export default Card;