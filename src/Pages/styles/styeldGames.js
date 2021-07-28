import styled, { keyframes } from "styled-components";

export const Test = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  background-color: white;
`;

export const Target = styled.div`
  background-color: orange;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  width: 100px;
  height: 100px;
`;

export const TargetBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 300px;
  height: 300px;
`;
