import styled, { keyframes, css } from "styled-components";

export const StyledSectonB = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;

  background: #f4f9f9;
`;

export const Tutorials = styled.div`
  height: 100%;
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
  left: 70px;
  width: 15%;
  height: 72%;
  background-image: linear-gradient(
    to bottom,
    #ff9b00,
    #fc9400,
    #fa8d00,
    #f78600,
    #f47f00
  );

  -webkit-box-shadow: -3px 4px 8px 0px #423400;
  box-shadow: -3px 4px 8px 0px #423400;
  position: absolute;
`;

export const StyledSectonC = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
