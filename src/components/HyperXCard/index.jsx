import { Card, Container, ProductInfo, PriceBttn } from "./styles";

import { useContext } from "react";
import { ProductContext, hyperXList } from "../../providers/Products";
import { CartContext } from "../../providers/Cart";

export const HyperXCard = () => {
  const { hyperXList } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);

  return (
    <>
      {hyperXList.map((hyper) => {
        return (
          <Card key={hyper.id}>
            <Container>
              <img src={hyper.img} alt={hyper.name} />
              <ProductInfo>
                <p>{hyper.name}</p>
                <PriceBttn>
                  <span>R${hyper.price}</span>
                  <button onClick={() => addProduct(hyper)}>COMPRAR</button>
                </PriceBttn>
              </ProductInfo>
            </Container>
          </Card>
        );
      })}
    </>
  );
};
