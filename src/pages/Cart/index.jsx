import { useContext } from "react";

import { Wrap } from "./styles";

import { SubtotalCard } from "../../components/SubtotalCard";
import { CardCart } from "../../components/CardCart";
import { CartContext } from "../../providers/Cart";
import { EmptyCart } from "../../components/EmptyCart";
export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Wrap>
      <SubtotalCard />
      {cart.length < 1 ? <EmptyCart /> : <CardCart />}
    </Wrap>
  );
};
