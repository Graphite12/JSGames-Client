import styled from "styled-components";

export const TetrisWrapper = styled.section`
  width: 90%;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
`;

export const TetrisBox = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
