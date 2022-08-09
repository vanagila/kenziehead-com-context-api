import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 255px;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 16px;
  background-color: #ffffff;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  img {
    width: 284px;
    height: 184px;
    border-radius: 16px;
  }

  @media screen and (min-width: 769px) {
    width: 350px;
    height: 315px;
    margin-left: 25px;

    img {
      width: 334px;
      height: 200px;
    }
  }
`;

export const Container = styled.div`
  padding: 8px 8px 13px 8px;

  @media screen and (min-width: 769px) {
    padding: 8px 8px 0 8px;
  }
`;

export const ProductInfo = styled.div`
  p {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 13px;
    color: #d48a00;
    text-align: left;
    margin-top: 4px;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 769px) {
    padding: 24px;

    p {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
`;

export const PriceBttn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  span {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #50331a;
  }

  button {
    width: 80px;
    height: 24px;
    border: none;
    border-radius: 10px;
    background-color: #fece2f;
    color: #ffffff;
    font-family: "Inter" sans-serif;
    font-weight: 700;
    font-size: 12px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    &:hover {
      opacity: 0.9;
      transform: translateY(-7px);
    }
  }

  @media screen and (min-width: 769px) {
    span {
      font-size: 20px;
    }

    button {
      width: 120px;
      height: 27px;
      font-size: 15px;
    }
  }
`;
