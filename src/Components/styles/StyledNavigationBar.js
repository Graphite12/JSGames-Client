import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px
  z-index: 100;
  position: sticky;
  top: 0;
  background-color: white;
`;
export const LogoBox = styled.div`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  margin-left: 2%;
  color: rgb(226, 226, 226);
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavbarContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between
  max-width: 100vw
  aligh-items: center;
  heigth: 1%;
`;
export const RouteUL = styled.ul`
  display: flex;
  flex-direction: row;

  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const RouteLi = styled.li`
  list-style: none;
  cursor: pointer;

  padding: 0 2%;

  &:hover {
    background-color: black;
  }
`;
export const RouteLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const SignForm = styled.article`
  display: flex;
  align-item: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%
  cursor: pointer;
`;

export const Button = styled.button``;
