import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { HyperXProducts } from "../pages/HyperXProducts";
import { DellProducts } from "../pages/DellProducts";
import { RedragonProducts } from "../pages/RedragonProducts";
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/hyperx" component={HyperXProducts} />
      <Route exact path="/dell" component={DellProducts} />
      <Route exact path="/redragon" component={RedragonProducts} />
    </Switch>
  );
};
