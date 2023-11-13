
const Card = ({ children }) => {
    return (
      <div>
        <h1>Este é o card</h1>
        <p>Este é o conteúdo do card</p>
      </div>
    );
  };
  
  const LoginCard = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);
  
    const handleClick = () => {
      setIsCardVisible(!isCardVisible);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Mostrar card</button>
        {isCardVisible && (
          <Card>
            <h1>Este é o conteúdo do card</h1>
          </Card>
        )}
      </div>
    );
  };
 

export default LoginCard