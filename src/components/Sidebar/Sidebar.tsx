import { useContext, useEffect } from "react";
import { SidebarStyle, ButtonNavStyle } from "./Styles";
import { Link, useLocation } from "react-router-dom";
import {
  CiSettings,
  CiUser,
  CiLogout,
  CiCalendar,
  CiHeart,
  CiStar,
} from "react-icons/ci";
import useMedia from "../Hooks/useMedia";
import { useState } from "react";
import { UserContext } from "../Contexts/UserContext";

const Sidebar = () => {
  const mobile = useMedia("(max-width: 48.24rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { userLogout } = useContext(UserContext);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <ButtonNavStyle>
        {mobile && (
          <button
            className={`mobileButton ${mobileMenu && "mobileButtonActive"}`}
            aria-label="Menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
      </ButtonNavStyle>
      <SidebarStyle>
        <div
          className={`${mobile ? "navMobile" : "aside"} ${
            mobileMenu && "navMobileActive"
          }`}
        >
          <div
            className={`${mobile ? "aside-wrapper-mobile" : "aside-wrapper"}`}
          >
            <nav className={`${mobile ? "nav-links-mobile" : "nav-links"}`}>
              <Link
                className={`${mobile ? "nav-link-mobile" : "nav-link px-2 "}`}
                to="/perfil"
              >
                <CiUser />
                <span className="ms-1 d-xl-inline d-md-none nav-iten">
                  Meu Perfil
                </span>
              </Link>
              <hr />
              <Link
                className={`${mobile ? "nav-link-mobile" : "nav-link px-2 "}`}
                to="/agenda"
              >
                <CiCalendar />
                <span className="ms-1 d-xl-inline d-md-none nav-iten">
                  Minha Agenda
                </span>
              </Link>
              <hr />
              <Link
                className={`${mobile ? "nav-link-mobile" : "nav-link px-2 "}`}
                to="/projetos"
              >
                <CiHeart />
                <span className="ms-1 d-xl-inline d-md-none nav-iten">
                  Remarcar horário
                </span>
              </Link>
              <hr />
              <Link
                className={`${mobile ? "nav-link-mobile" : "nav-link px-2 "}`}
                to="/sobre"
              >
                <CiStar />
                <span className="ms-1 d-xl-inline d-md-none nav-iten">
                  Sobre o salão
                </span>
              </Link>
              <hr />
              <Link
                className={`${mobile ? "nav-link-mobile" : "nav-link px-2 "}`}
                to="/configuracao"
              >
                <CiSettings />
                <span className="ms-1 d-xl-inline d-md-none nav-iten">
                  Configuração
                </span>
              </Link>
              <hr />
              <button
                className={`${mobile ? "nav-link-mobile" : "nav-link px-2 "}`}
                onClick={userLogout}
              >
                <CiLogout />
                <span className="ms-1 d-xl-inline d-md-none nav-iten">
                  Sair
                </span>
              </button>
            </nav>
          </div>
        </div>
      </SidebarStyle>
    </>
  );
};

export default Sidebar;
