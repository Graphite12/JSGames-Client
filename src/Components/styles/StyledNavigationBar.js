import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

//Desktop
export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  z-index: 5;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 1);
`;

export const NavbarContainer = styled.section`
  display: flex;

  justify-content: space-between;
  width: 100%;
  height: 80px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: rgb(226, 226, 226);
  font-size: 1.5rem;
  font-weight: 500;
`;

export const MobileIcon = styled.button`
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
`;

export const RouteLi = styled.li`
  display: flex;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid transparent;
  align-items: center;
  margin: 0 2%;

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
  color: #022e57;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  font-weight: 300;

  @media screen and (max-width: 1080px) {
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 3.2rem;
    font-weight: bold;
    height: 100%;

    &:hover {
      color: white;
      background-color: black;
    }
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
