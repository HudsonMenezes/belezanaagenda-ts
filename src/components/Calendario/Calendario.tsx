import React, { useState } from "react";
import { getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { CalendarioStyle } from "./Styles";

const modifiers = {
  disabled: (date: number | Date) => getDay(date) === 0, // Desativa os Domingos
  highlight: (date: number | Date) => getDay(date) === 6, // Destaque aos Sábados
};

const modifiersClassNames = {
  highlight: "-highlight",
};
export default function DatePicker() {
  const [date, setDate] = useState<any>(new Date());

  console.log(date.toISOString());

  return (
    <CalendarioStyle>
      <p>Escolha o dia:</p>
      <DatePickerCalendar
        date={date}
        onDateChange={setDate}
        locale={ptBR}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
      />
    </CalendarioStyle>
  );
}
