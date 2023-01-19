// import Sidebar from "../Sidebar/Sidebar";
import { HeaderStyle } from "./Styles";
import Logo from "../../assets/logo3.png";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <HeaderStyle className="headerStyle d-flex justify-content-between align-items-center">
        <Link to="/agenda">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <Sidebar />
      </HeaderStyle>
    </>
  );
}

export default Header;
