import { Card, ProductInfo, Container, PriceBttn } from "./styles";
import { Button } from "../Button";
import { useContext } from "react";
import { ProductContext } from "../../providers/Products";
import { CartContext } from "../../providers/Cart";
export const AllProductsCard = () => {
  const { products } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);

  return (
    <>
      {products.map((product) => {
        return (
          <Card key={product.id}>
            <Container>
              <img src={product.img} alt={product.name} />
              <ProductInfo>
                <p>{product.name}</p>
                <PriceBttn>
                  <span>R${product.price}</span>
                  <Button onClick={() => addProduct(product)}>COMPRAR</Button>
                </PriceBttn>
              </ProductInfo>
            </Container>
          </Card>
        );
      })}
    </>
  );
};
