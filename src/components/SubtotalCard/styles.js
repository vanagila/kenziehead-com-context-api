import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  border-radius: 16px;
  width: 250px;
  height: 170px;
  background-color: #ffff;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  > p {
    font-weight: 700;
    font-family: "Inter", sans-serif;
    text-align: center;
    color: #000000;
  }

  @media screen and (min-width: 769px) {
    width: 472px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > p {
      font-size: 25px;
      margin-bottom: 48px;
    }
  }
`;

export const SubtotalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 200px;
    height: 40px;
    border: 2px solid #fece2f;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 7px;

    p {
      font-family: "Inter", sans-serif;
      font-size: 12px;
      font-weight: 600;
    }

    span {
      font-family: "Inter", sans-serif;
      font-size: 12px;
      font-weight: 600;
    }
  }

  @media screen and (min-width: 769px) {
    div {
      width: 420px;
      height: 48px;

      p {
        font-size: 16px;
      }

      span {
        font-size: 16px;
      }
    }
  }
`;

export const SubtotalBttns = styled.article`
  display: flex;
  gap: 30px;
  margin-top: 12px;
`;
