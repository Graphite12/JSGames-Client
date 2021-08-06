import styled from "styled-components";

export const GamesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12%;
  height: 40%;
  margin: 0 1%;

  border-radius: 10px;
  transition: 0.2s linear;
  box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.45);
  background: whitesmoke;

  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: -1px 6px 12px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 6px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 6px 12px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const GamesImage = styled.div`
  height: 70%;
  width: 90%;

  position: absolute;
  top: 5%;
`;

export const GameTitles = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: -83%;
`;
