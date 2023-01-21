import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserHeaderStyle } from "./style";
import backarow from "../../assets/back.png";
import { Stepper } from "react-form-stepper";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const [span, setSpan] = useState("");
  const [p, setP] = useState("");
  const [step, setStep] = useState<number>();
  const [back, setBack] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/data":
        setTitle("1º PASSO");
        setSpan("Escolha o dia");
        setBack("/agenda");
        setStep(0);
        break;
      case "/horario":
        setTitle("2º PASSO");
        setSpan("Escolha o");
        setP("horário");
        setBack("/data");
        setStep(1);
        break;
      case "/profissional":
        setTitle("3º PASSO");
        setSpan("Escolha o");
        setP("profissional");
        setBack("/horario");
        setStep(2);
        break;
      default:
        setTitle("");
        setSpan("");
    }
  }, [location]);

  return (
    <UserHeaderStyle>
      <div className="arrow">
        <div className="backButton">
          <img src={backarow} alt="Voltar" className="m-2" />
          <Link to={back}>Voltar</Link>
        </div>
        <div className="stepper">
          <Stepper
            steps={[{}, {}, {}]}
            styleConfig={{
              activeBgColor: "#ffc973",
              activeTextColor: "#000",
              completedBgColor: "#ffc973",
              completedTextColor: "#000",
              inactiveBgColor: "#eaeaea",
              inactiveTextColor: "#000",
              size: "3rem",
              circleFontSize: "16rem",
              labelFontSize: 14,
              borderRadius: "50rem",
              fontWeight: 4,
            }}
            activeStep={step}
          />
        </div>
      </div>
      <div className="title-step ">
        <h1 className="title animeLeft">{title}</h1>
        <span className="span animeLeft">
          {span}
          <br />
          {p}
        </span>
      </div>
    </UserHeaderStyle>
  );
};

export default UserHeader;
