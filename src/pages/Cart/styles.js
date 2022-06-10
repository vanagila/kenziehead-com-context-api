import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 290px;
  height: 110px;
  border: 2px solid var(--cinza-zero);
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  figure {
    display: flex;
    justify-content: center;
    width: 35%;
  }

  img {
    width: 70px;
    height: 90px;
    margin-right: 10px;
    margin-left: 10px;
    align-self: center;
  }
`;

export const CardCart = styled.div`
  height: 100%;
  width: 65%;
  background-color: var(--cinza-zero);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h5 {
    width: 170px;
    margin: 0;
    text-align: center;
  }

  span {
    color: rgba(0, 197, 105);
    font-weight: 500;
  }
`;
