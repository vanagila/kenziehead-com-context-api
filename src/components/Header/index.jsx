import { Container, NavBar, CartPrice } from "./styles";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../providers/Cart";
import { useContext } from "react";

export const Header = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  const totalPrice = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  const goToCart = () => {
    history.push("/cart");
  };

  return (
    <NavBar>
      <h3 onClick={() => history.push("/")}>KenziePhone</h3>
      <Container onClick={() => goToCart("/signup")}>
        <FaShoppingCart className="cart-icon" />
        <p>{cart.length}</p>
      </Container>
      <CartPrice>
        <span>R$ {totalPrice}</span>
      </CartPrice>
    </NavBar>
  );
};
