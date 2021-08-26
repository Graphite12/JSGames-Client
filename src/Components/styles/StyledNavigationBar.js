import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Container } from "../../globalStyles";

//Desktop
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: 80px;

  @media (max-width: 1080px) {
    transition: 0.2s linear;
    background-color: rgba(3, 3, 3, 0.9);
    position: fixed;
  }
`;

export const LogoBox = styled.div`
  color: #7b7fda;
  text-decoration: none;
  font-weight: bold;
  font-size: 2.5rem;
  height: 100%;

  cursor: pointer;
  margin-left: 2rem;
  margin-top: 1rem;
`;

export const Burger = styled.button`
  outline: none;
  border: none;
  font-size: 2rem;
  background: inherit;
  color: white;
  font-weight: bold;
`;

export const BurgerIcon = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
  }
`;

export const MenuLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 10%;

  @media (max-width: 1080px) {
    background-color: rgba(3, 3, 3, 0.9);

    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    top: 50px;
    flex-direction: column;
    max-height: ${({ click }) => (click ? "700px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    height: 100%;
    position: fixed;
  }
`;

export const MenuLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const RouteLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 2rem;
  padding: 0 2rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: bold;

  &:hover {
    color: black;
    background: #e7e9fc;
  }
`;
export const SignForm = styled.article``;

export const ButtonContainer = styled.div`
  margin-right: 2rem;

  @media (max-width: 1080px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5% 0;
    width: 100%;
  }
`;

export const AuthButton = styled.button`
  outline: none;
  border: none;

  width: 200px;
  height: 50px;
  border-radius: 1rem;
  margin-left: 1rem;
  cursor: pointer;

  font-size: 2rem;
  font-weight: bold;

  transition: 0.2s linear;

  &:hover {
    transform: translateY(-3px);
    background: black;
    color: white;
  }

  @media (max-width: 1080px) {
    width: 200px;
    height: 70px;
    border-radius: 0;
  }
`;

//Mobile
