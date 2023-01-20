import BtnHora from "../BtnHora/BtnHora";

const HourPicker = () => {
  return (
    <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-2 g-lg-3 mt-5 ">
      <div className="col">
        <BtnHora>08:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>09:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>10:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>11:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>12:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>13:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>14:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>15:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>16:00</BtnHora>
      </div>
      <div className="col">
        <BtnHora>17:00</BtnHora>
      </div>
    </div>
  );
};

export default HourPicker;
