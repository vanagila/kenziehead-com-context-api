import { Container } from "./styles";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export const Header = () => {
  const history = useHistory();

  const goToCart = () => {
    history.push("/cart");
  };

  return (
    <Container>
      <h3 onClick={() => history.push("/")}>KenziePhone</h3>
      {/* <FaHome className="home-icon" /> */}
      <FaShoppingCart
        className="cart-icon"
        onClick={() => goToCart("/signup")}
      />
    </Container>
  );
};
