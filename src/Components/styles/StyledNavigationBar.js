import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

//Desktop
export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  z-index: 100;
  position: sticky;
  top: 0;
  background: #101522;
`;

export const NavbarContainer = styled.section`
  display: flex;

  justify-content: space-between;
  width: 98%;
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
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const RouteUL = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const RouteLi = styled.li`
  height: 100%;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 1080px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const RouteLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width:1080px) {
   text-align: center;
   padding: 1rem;
   width: 100%
   display: table;
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
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`;

export const ButtonContainer = styled.article`
  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
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
`;

//Mobile
