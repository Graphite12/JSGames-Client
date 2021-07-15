import styled from "styled-components";
// import { HashLink as Link } from "react-router-dom";
//Section A
export const StyledSectonA = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionAContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 90vh;
  margin: 0;
  padding: 0;
  background: #f4f9f9;

  overflow: hidden
  color: black;
`;

export const PageBtnBox = styled.div`
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 5%;
  height: 50%;
`;

export const PageBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relactive;

  margin: 5%;
  font-size: 1.8rem;
  border: ${({ click }) => (click ? "2px solid white" : "")};
  border-right: ${({ click }) => (click ? "none" : "")};
  background-color: ${({ click }) => (click ? "green" : "white")};
  transition: background 0.2s ease-in-out;

  &:hover {
    background: yellow;
  }
`;

export const Introduce = styled.div``;
export const Howtouse = styled.div``;
export const Contents = styled.div``;

export const Content = styled.div`
  ${({ click }) => (click ? "" : "display:none")}
`;

//Section B
export const StyledSectonB = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  background-color: green;
`;

//Section C
export const StyledSectonC = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  background-color: orange;
`;
