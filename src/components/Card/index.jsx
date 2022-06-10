import { CardContainer, CardInfo } from "./styles";
import { useContext } from "react";
import { ProductContext } from "../../providers/Products";
import { CartContext } from "../../providers/Cart";
export const Card = () => {
  const { products } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);

  return (
    <>
      {products.map((product) => {
        return (
          <CardContainer key={product.id}>
            <figure>
              <img src={product.img} alt={product.name} />
            </figure>
            <CardInfo>
              <h4>{product.name}</h4>
              <span>R$ {product.price}</span>
              <button onClick={() => addProduct(product)}>COMPRAR</button>
            </CardInfo>
          </CardContainer>
        );
      })}
    </>
  );
};
