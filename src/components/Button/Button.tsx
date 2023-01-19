import { ButtonStyle } from "./style";
import { ButtonHTMLAttributes, useContext } from "react";
import { UserAgenda } from "../Contexts/UserAgenda";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { setHora } = useContext(UserAgenda);
  return (
    <ButtonStyle onClick={() => setHora(children)} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
