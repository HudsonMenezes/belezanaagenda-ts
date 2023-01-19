import React, { ButtonHTMLAttributes, useContext } from "react";
import { UserAgenda } from "../Contexts/UserAgenda";
import { BtnHoraStyled } from "./style";

const BtnHora: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { setHora } = useContext(UserAgenda);
  return (
    <BtnHoraStyled onClick={() => setHora(children)} {...props}>
      {children}
    </BtnHoraStyled>
  );
};

export default BtnHora;
