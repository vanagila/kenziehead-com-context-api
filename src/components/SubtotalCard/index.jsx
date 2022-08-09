import { Button } from "../Button";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart";
import { Container, Subtotal, SubtotalContent, SubtotalBttns } from "./styles";

export const SubtotalCard = () => {
  const { cartQty, totalCart, removeAll } = useContext(CartContext);
  return (
    <Container>
      <Subtotal>
        <p>SUBTOTAL</p>
        <SubtotalContent>
          <div>
            <p>QUANT. DE PRODUTOS:</p>
            <span>{cartQty}</span>
          </div>
          <div>
            <p>VALOR TOTAL:</p>
            <span>R${totalCart}</span>
          </div>
          <SubtotalBttns>
            <Button subTotal>FINALIZAR</Button>
            <Button subTotal onClick={() => removeAll()}>
              ESVAZIAR
            </Button>
          </SubtotalBttns>
        </SubtotalContent>
      </Subtotal>
    </Container>
  );
};
