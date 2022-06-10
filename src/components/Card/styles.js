import styled from "styled-components";

export const CardContainer = styled.div`
  margin: auto;
  width: 250px;
  height: 260px;
  border: 2px solid var(--cinza-zero);
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  figure {
    height: 50%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 80px;
    height: 100px;
    align-self: center;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  background-color: var(--cinza-zero);
  gap: 15px;

  h4 {
    margin: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--cinza-cem);
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: var(--cor-primaria);
  }

  button {
    width: 100px;
    height: 30px;
    border: 1px solid #1c5db9;
    border-radius: 20px;
    font-weight: 600;
    text-align: center;
    font-size: 16px;
    color: #1c5db9;
  }
`;
