// import Sidebar from "../Sidebar/Sidebar";
import { HeaderStyle } from "./Styles";
import Logo from "../../assets/logo.png";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  return (
    <>
      <HeaderStyle className="headerStyle d-flex justify-content-between align-items-center">
        <img src={Logo} alt="Logo" className="logo" />
        <Sidebar />
      </HeaderStyle>
    </>
  );
}

export default Header;
