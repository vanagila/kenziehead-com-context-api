import { Card, Container, ProductInfo, PriceBttn } from "./styles";

import { useContext } from "react";
import { ProductContext, dellList } from "../../providers/Products";
import { CartContext } from "../../providers/Cart";

export const DellCard = () => {
  const { dellList } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);

  return (
    <>
      {dellList.map((dell) => {
        return (
          <Card key={dell.id}>
            <Container>
              <img src={dell.img} alt={dell.name} />
              <ProductInfo>
                <p>{dell.name}</p>
                <PriceBttn>
                  <span>R${dell.price}</span>
                  <button onClick={() => addProduct(dell)}>COMPRAR</button>
                </PriceBttn>
              </ProductInfo>
            </Container>
          </Card>
        );
      })}
    </>
  );
};
