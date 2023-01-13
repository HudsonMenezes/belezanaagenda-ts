import styled from "styled-components";

export const SidebarStyle = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a > svg {
    color: black;
  }

  .menu-bars {
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    background-color: #FFC973;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: left;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 999;
    transition: 850ms;
  }
  
  .nav-menu a > svg {
    color: #404040;
  }

  .nav-menu.active {
    right: 0;
    z-index: 999;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #404040;
    font-size: 16px;
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #ffe1b0;
    transition: 0.5s;
  }

  .nav-menu-items {
    width: 100%;
    color: #404040;
    font-weight: bold;
  }

  .navbar-toggle {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
  }
`;
