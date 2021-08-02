import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Container } from "../../globalStyles";

//Desktop
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  z-index: 11;

  background: rgba(0, 0, 0, 1);
`;

export const NavbarContainer = styled(Container)`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  ${Container};
`;

export const LogoBox = styled.div`
  margin-left: 1%;
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

export const MenuIcon = styled.button`
  display: none;

  @media screen and (max-width: 1080px) {
    display: block;
    position: absolute;
    color: #022e57;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const RouteUL = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 40px;
    right: ${({ click }) => (click ? "0" : "-100%")};
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
  }
`;

export const RouteLi = styled.li`
  height: 40px;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 1080px) {
    border-bottom: none;

    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const RouteLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: #e38b06;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
export const SignForm = styled.article`
  display: flex;
  align-item: center;
  height: 100%;
  cursor: pointer;
`;

export const ButtonContainer = styled.article`
  width: 100%;
  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const Button = styled.button`
  padding: 5% 15%;
  width: 150px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  background-color: #1888ff;

  &:hover {
    padding: 6px 18px;
    transition: all 0.3s ease-out;
    background-color: transparent;
    color: #fff;
    border-radius: 4px;
    border: 2px solid v#1888ff;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 1080px) {
    width: 80%;
    margin: 6%;
    &:hover {
      padding: 6px 18px;
      transition: all 0.3s ease-out;
      background-color: transparent;
      color: #fff;
      border-radius: 4px;
      border: 2px solid v#1888ff;
      transition: all 0.3s ease-out;
    }
  }
`;

//Mobile
