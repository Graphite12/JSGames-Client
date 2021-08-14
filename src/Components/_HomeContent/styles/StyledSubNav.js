import styled, { keyframes, css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Container } from "../../../globalStyles";

export const Sub_Navigation = styled.nav`
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;

  background: ${({ sticky }) => (sticky ? "rgba(2,2,2, .5)" : "white")};
  position: ${({ sticky }) => (sticky ? "fixed" : "absolute")};
  top: 0;
`;

export const SubNavContainer = styled(Container)`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  ${Container};
`;

// export const LinkedUl = styled.ul`
//   display: flex;
//   align-items: center;
//   text-align: center;
// `;

// export const LinkedLi = styled.li`
//   height: 50px;
// `;

// export const Links = styled(Link)`
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 2rem;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   height: 100%;
//   transition: all 0.2s ease;

//   &:hover {
//     color: #e38b06;
//     transform: traslateY(-3rem);
//   }
//   &:active {
//     transform: traslateY(3rem);
//     color: #e38b06;
//   }
// `;
