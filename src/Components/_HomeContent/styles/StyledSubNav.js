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

// const slideDown = styled.keyframes`
//   from {
//     transform: translateY(-100%);
//   }

//   to {
//     transform: translateY(0);
//   }
// `;

export const Sub_Navigation = styled.nav`
  display: flex;
  z-index: 5;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;

  background: ${({ color }) => (color ? "rgba(2,2,2, 1)" : "rgba(2,2,2, .5)")};
  position: ${({ pos }) => (!pos ? "absolute" : "sticky")};
  top: ${({ pos }) => `${pos}`};
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
`;
