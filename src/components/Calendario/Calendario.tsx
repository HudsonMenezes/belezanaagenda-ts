import { getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { UserAgenda } from "../Contexts/UserAgenda";
import { CalendarioStyle } from "./Styles";

const modifiers = {
  disabled: (date: number | Date) => getDay(date) === 0, // Desativa os Domingos
  highlight: (date: number | Date) => getDay(date) === 6, // Destaque aos Sábados
};

const modifiersClassNames = {
  highlight: "-highlight",
};
export default function DatePicker() {
  const { data, setData } = useContext(UserAgenda);

  return (
    <CalendarioStyle>
      <DatePickerCalendar
        date={data}
        onDateChange={setData}
        locale={ptBR}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
      />
    </CalendarioStyle>
  );
}
