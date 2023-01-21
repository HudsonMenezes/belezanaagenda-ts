import styled from "styled-components";

export const SidebarStyle = styled.aside`
  .aside {
    height: 90%;
    display: flex;
    flex-direction: column-reverse;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .aside-wrapper {
    height: 85%;
    background-color: transparent;
    overflow: visible;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .aside-wrapper-mobile {
    position: relative;
    /* top: 0; */
    bottom: -165%;
    width: 100vw;
    height: 100vh;
    background-color: #ffc973;
  }
  .nav-links-mobile {
    /* background-color: red; */
    margin: 2rem 0 1rem;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .nav-links {
    height: 92.8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .nav-link-mobile {
    margin: 0 auto;
    width: 10rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #404040;
  }
  .nav-link-mobile svg {
    font-size: 24px;
  }

  .nav-links a {
    display: flex;
    text-align: center;
    line-height: 3rem;
    text-decoration: none;
    color: #404040;
  }
  .nav-link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  button {
    border: none;
    background-color: transparent;
  }
  .nav-link svg {
    font-size: 24px;
  }

  .navMobile {
    margin-top: 25px;
    display: flex;
    position: absolute;
    right: 0px;
    padding: 0;
    background: transparent;
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
  }
  .navMobileActive {
    transition: 0.3s;
    height: 18rem;
    position: fixed;
    transform: initial;
    opacity: 1;
    pointer-events: initial;
    z-index: 100;
  }

  @media (max-height: 359px) {
    .aside-wrapper {
      height: 70%;
      justify-content: center;
    }
    .nav-links {
      height: auto;
    }
    hr {
      margin: 0.3rem;
    }
  }
  @media (max-width: 393px) {
    .aside-wrapper-mobile {
      bottom: -80%;
    }
  }
`;
export const ButtonNavStyle = styled.menu`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .mobileButton {
    background: transparent;
    color: black;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }
  .mobileButton::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
  .mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor 0 -8px currentColor;
  }
`;
