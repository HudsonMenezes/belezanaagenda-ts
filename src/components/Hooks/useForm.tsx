import { useState, ChangeEvent } from "react";

interface ValidatorBase {
  regex: RegExp;
  message: string;
}

interface ValidatorType {
  [id: string]: ValidatorBase;
}

const validators: ValidatorType = {
  login: {
    regex: /.{3}/,
    message: "Campo deve conter mais de 3 caracteres",
  },

  senha: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.",
  },

  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas numeros",
  },
};

type typeInput = "nome" | "email" | "number" | "login" | "senha" | undefined;

interface Response {
  value: any;
  erro: string | undefined;
  validate: () => boolean;
  onBlur: () => boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useForm = (type: typeInput = undefined): Response => {
  const [value, setValue] = useState<string | number | Date | undefined>("");
  const [erro, setError] = useState<string | undefined>();

  const validationExist = (type: string) => !!validators[type],
    didNotPassTheRegex = (type: string, valor: any) =>
      !validators[type].regex.test(valor);

  function validate(value: any): boolean {
    if (type === undefined) return true;

    if (typeof value === "string" && value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (validationExist(type) && didNotPassTheRegex(type, value)) {
      setError(validators[type].message);
      return false;
    } else {
      setError(undefined);
      return true;
    }
  }

  function onChange({ target }: ChangeEvent<HTMLInputElement>): void {
    if (erro) validate(target.value);

    setValue(target.value);
  }

  return {
    value,
    erro,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
