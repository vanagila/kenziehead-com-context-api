import { useContext } from "react";
import { CartContext } from "../../providers/Cart";
import { ProductContext } from "../../providers/Products";

import { Container, Card, ProductInfo, Btns } from "./styles";

import { FiX, FiPlus, FiMinus } from "react-icons/fi";

export const CardCart = () => {
  const { cart, removeProductByOne, addProduct, removeProductCard } =
    useContext(CartContext);
  return (
    <Container>
      {cart.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.img} alt={item.name} />
            <ProductInfo>
              <button onClick={() => removeProductCard(item)}>
                <FiX size={20} />
              </button>
              <p>{item.name}</p>
              <Btns>
                <button onClick={() => addProduct(item)}>
                  <FiPlus size={18} color={"#50331a"} />
                </button>
                <span>{item.qty}</span>
                <button>
                  <FiMinus
                    size={18}
                    onClick={() => removeProductByOne(item)}
                    color={"#50331a"}
                  />
                </button>
              </Btns>
              <span>R${item.price}</span>
            </ProductInfo>
          </Card>
        );
      })}
    </Container>
  );
};
