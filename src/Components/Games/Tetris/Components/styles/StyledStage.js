import styled from "styled-components";

export const Stages = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(20vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 3px solid green;
  width: 100%;
  max-width: 20vw;
  background: #111;
`;
