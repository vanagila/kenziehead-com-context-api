import styled from "styled-components";

export const Container = styled.button`
  width: ${(props) => (props.subTotal ? "100px" : "80px")};
  height: ${(props) => (props.subTotal ? "30px" : "24px")};
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

  @media screen and (min-width: 769px) {
    width: ${(props) => (props.subTotal ? "196px" : "120px")};
    height: ${(props) => (props.subTotal ? "50px" : "27px")};
    font-size: ${(props) => (props.subTotal ? "18px" : "15px")};
  }
`;
