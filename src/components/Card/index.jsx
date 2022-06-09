import { CardContainer, CardInfo } from "./styles";
import { useContext } from "react";
import { ProductContext } from "../../providers/Products";
export const Card = () => {
  const { products } = useContext(ProductContext);

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
              <button>COMPRAR</button>
            </CardInfo>
          </CardContainer>
        );
      })}
    </>
  );
};
