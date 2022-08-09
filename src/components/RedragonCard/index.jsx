import { Card, Container, ProductInfo, PriceBttn } from "./styles";

import { useContext } from "react";
import { ProductContext, redragonList } from "../../providers/Products";
import { CartContext } from "../../providers/Cart";

export const RedragonCard = () => {
  const { redragonList } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);

  return (
    <>
      {redragonList.map((redragon) => {
        return (
          <Card key={redragon.id}>
            <Container>
              <img src={redragon.img} alt={redragon.name} />
              <ProductInfo>
                <p>{redragon.name}</p>
                <PriceBttn>
                  <span>R${redragon.price}</span>
                  <button onClick={() => addProduct(redragon)}>COMPRAR</button>
                </PriceBttn>
              </ProductInfo>
            </Container>
          </Card>
        );
      })}
    </>
  );
};
