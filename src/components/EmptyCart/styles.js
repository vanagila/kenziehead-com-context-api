import styled from "styled-components";

export const WrapCart = styled.main`
  width: 300px;
  height: 300px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  border-radius: 16px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 28px;
    text-align: center;
  }

  @media screen and (min-width: 769px) {
    width: 472px;
    height: 350px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;
