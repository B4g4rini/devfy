import styles from "./card.module.css";

const Card = ({ children, img }) => {
 
  return (
    <div className={styles.musicas}>
      <img src={img} alt="albuns musicais" width={"150"} />
      <p>{children}</p>
    </div>
  );
};

export default Card;