import styled, { keyframes, css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Container } from "../../../globalStyles";

// export const StyledSectonB = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 50px;
//   z-index: 3;
// `;

export const Tutorials = styled.nav`
  display: flex;
  z-index: 5;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;

  background-image: linear-gradient(
    to right bottom,
    #ffc800,
    #fac100,
    #f5ba00,
    #f0b400,
    #ebad00
  );

  -webkit-box-shadow: rgb(0, 0, 0) 0px 10px 13px -7px,
    inset 0px -9px 11px 0px rgba(66, 52, 0, 0);
  box-shadow: rgb(0, 0, 0) 0px 10px 13px -7px,
    inset 0px -9px 11px 0px rgba(66, 52, 0, 0);
`;

export const Banners = styled.div`
  display: flex;
  left: 2%;
  top: 105%;
  width: 15%;
  height: 50px;
  background-image: linear-gradient(
    to bottom,
    #ff9b00,
    #fc9400,
    #fa8d00,
    #f78600,
    #f47f00
  );
  position: absolute;
`;

export const SubNavContainer = styled(Container)`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  ${Container};
`;

export const LinkedUl = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const LinkedLi = styled.li`
  height: 50px;
`;

export const Links = styled(Link)`
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
