import { useContext } from "react";
import { CartContext } from "../../providers/Cart";
import { ProductContext } from "../../providers/Products";
import { Container, CardCart } from "./styles";
import "./styles.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const Cart = () => {
  const { products } = useContext(ProductContext);
  const { cart, removeProduct, removeAll } = useContext(CartContext);

  return (
    <>
      <button onClick={() => removeAll()}>ESVAZINHAR CARRINHO</button>
      {cart.map((item) => {
        return (
          <Container key={item.id}>
            <figure>
              <img src={item.img} alt={item.name} />
            </figure>
            <CardCart>
              <AiFillCloseCircle
                onClick={() => removeProduct(item)}
                className="delete-icon"
              />
              <h5>{item.name}</h5>
              <span>R$ {item.price}</span>
            </CardCart>
          </Container>
        );
      })}
    </>
  );
};
