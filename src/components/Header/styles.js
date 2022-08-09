import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  width: 100%;
  height: 78px;
  background-color: #f8f9fa;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-top: 7px;
  padding-bottom: 7px;

  h2 {
    font-family: "Rubik Mono One", sans-serif;
    color: #000000;
    text-align: center;
    cursor: pointer;
  }

  a {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: #000000;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;

    h3 {
      text-align: start;
    }
  }
`;

export const HyperDell = styled.nav`
  display: flex;
  justify-content: center;
  gap: 26px;
`;

export const RedAll = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const NavLink = styled(Link)`
  border-bottom: ${(props) => (props.selected ? "1px solid #FECE2F" : "none")};
  padding-bottom: ${(props) => (props.selected ? "1px" : "none")};
`;
