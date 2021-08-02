import styled, { keyframes, css } from "styled-components";

export const LogPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  z-index: 1;
`;

export const DefaultScreen = styled.div`
  width: 80%;
  height: 100%;
  background: whitesmoke;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

//컴포넌트 C

export const StyledSectonC = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background: white;
  z-index: 1;
`;

export const ShowCase = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid black;
  width: 95%;
`;

export const ShowGameCard = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid black;
  background: brown;
`;

//컴포넌트 D

export const StyledSectonD = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: green;
  height: 70vh;
  z-index: 1;
  position: relative;
`;

export const TabContainer = styled.div`
  display: flex;
  width: 97%;
  height: 85%;
  border-radius: 20px;

  background: white;

  position: absolute;
  top: 8%;
`;

export const TabList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 25%;
`;

export const TabMenu = styled.li`
  margin: 10% 0;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  border-right: ${({ active }) => (active ? "3px solid black" : "none")};

  &:hover {
    color: whitesmoke;
  }
`;

export const TabsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  border: 1px solid black;
`;

export const StyledSectonE = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: orange;
  height: 100vh;
  z-index: 1;
`;
