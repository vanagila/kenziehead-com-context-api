import { Container } from "./styles";

export const Button = ({ children, subTotal = false, ...rest }) => {
  return (
    <Container subTotal={subTotal} {...rest}>
      {children}
    </Container>
  );
};
