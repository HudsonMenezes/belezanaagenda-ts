import { ButtonStyle } from "./style";
import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
