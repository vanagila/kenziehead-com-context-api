import { Route, Switch } from "react-router-dom";
import { Display } from "../pages/Display";
import { Cart } from "../pages/Cart";
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Display} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};
