import styled from "styled-components";

export const Wrap = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 769px) {
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 95px;
  }
`;
