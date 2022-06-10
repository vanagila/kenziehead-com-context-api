import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  height: 70px;
  width: 100%;
  background: var(--cinza-zero);
  margin-bottom: 25px;

  h3 {
    color: #1c5db9;
    padding-top: 25px;
    margin: 0;
    padding-left: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
`;

export const CartPrice = styled.div`
  /* margin-left: 10px; */
  color: rgba(0, 197, 105);
`;
