import { Container, NavBar, HyperDell, RedAll, NavLink } from "./styles";
import { useHistory, useLocation } from "react-router-dom";
export const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <NavBar>
      <Container>
        <h2 onClick={() => history.push("/")}>KenzieHead</h2>
        <HyperDell>
          <NavLink selected={pathname === "/hyperx"} to={"/hyperx"}>
            HYPERX
          </NavLink>
          <NavLink selected={pathname === "/dell"} to={"/dell"}>
            DELL
          </NavLink>
        </HyperDell>
        <RedAll>
          <NavLink selected={pathname === "/redragon"} to={"/redragon"}>
            REDRAGON
          </NavLink>
          <NavLink selected={pathname === "/"} to={"/"}>
            TODOS
          </NavLink>
          <NavLink selected={pathname === "/cart"} to={"/cart"}>
            CARRINHO
          </NavLink>
        </RedAll>
      </Container>
    </NavBar>
  );
};
