import styled from "styled-components";

export const Container = styled.div`
  max-height: 415px;
  display: flex;
  border-radius: 16px;
  margin-top: 12px;
  padding: 10px;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: minmax(290px, 1fr);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #000000;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fece2f;
    border-radius: 10px;
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 290px;
  height: 100px;
  padding: 5px 7px;
  background-color: #ffffff;
  border-radius: 16px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  img {
    width: 127px;
    height: 90px;
    border-radius: 16px;
  }

  @media screen and (min-width: 769px) {
    width: 600px;
    height: 230px;

    img {
      width: 300px;
      height: 200px;
      margin-top: 10px;
    }
  }
`;

export const ProductInfo = styled.div`
  margin: 0 10px 0 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > button {
    align-self: flex-end;
    background: none;
    border: none;
    width: 20px;
    height: 20px;
    &:hover {
      opacity: 0.5;
    }
  }
  p {
    width: 136px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #d48a00;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > span {
    text-align: center;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #50331a;
  }

  @media screen and (min-width: 769px) {
    gap: 20px;

    > button {
      width: 24px;
      height: 24px;
    }
    p {
      width: 270px;
      font-size: 20px;
      white-space: pre-wrap;
      text-align: center;
    }

    span {
      font-size: 20px;
    }
  }
`;

export const Btns = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 5px;

  > button {
    background: none;
    border: none;
    transition: all 0.3s ease 0s;
    &:hover {
      transform: translateY(-7px);
    }
  }

  > span {
    align-self: center;
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #d48a00;
  }

  @media screen and (min-width: 769px) {
    > span {
      font-size: 25px;
      font-weight: 800;
    }
  }
`;
