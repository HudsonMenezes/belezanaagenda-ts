import { ChangeEvent, FocusEvent } from "react";
import { Style } from "./style";

interface InputProps {
  name?: string;
  label?: string;
  type?: string;
  value?: any;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  erro?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  erro,
  ...rest
}) => {
  return (
    <Style>
      <label htmlFor={name}></label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      ></input>
    </Style>
  );
};

export default Input;
