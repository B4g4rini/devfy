import styles from "./card.module.css";

const Card = ({ children, img }) => {

  };
  return (
    <div className={styles.racao1}>
      <img src={img} alt="rações para cães" width={"275"} />
      <p>{children}</p>
      <button className={styles.btn} onClick={alert2}>
        Compre Agora
      </button>
    </div>
  );

export default Card;