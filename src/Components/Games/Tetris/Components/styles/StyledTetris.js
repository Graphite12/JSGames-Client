import styled from "styled-components";

export const TetrisWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  background-size: cover;
  overflow: hidden;
`;

export const TetrisBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
