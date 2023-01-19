import styled from "styled-components";

export const CalendarioStyle = styled.div`
  p {
    text-align: left;
    margin-top: 36px;
  }

  .nice-dates-day.-highlight {
    color: #e4acdd;
  }

  .nice-dates-day {
    font-size: 20px;
  }

  .nice-dates-week-header_day {
    color: black;
    font-size: 12px;
  }

  .nice-dates-day_month {
    font-size: 14px;
    top: -1px;
  }

  .nice-dates-day.-selected * {
    color: #7d2a90;
  }

  .nice-dates-day:before {
    background-color: #ffc973;
  }

  .nice-dates-day.-disabled {
    color: #e4acdd;
  }
`;
