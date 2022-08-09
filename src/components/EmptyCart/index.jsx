import { WrapCart } from "./styles";

import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <WrapCart>
      <h2>
        Seu carrinho está vazio. <Link to={"/"}>Vamos as compras!</Link>{" "}
      </h2>
    </WrapCart>
  );
};
