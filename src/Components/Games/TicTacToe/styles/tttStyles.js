import styled, { keyframes } from "styled-components";
import React from "react";

export const BoardScreen = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Boards = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TTTBoard = styled.div`
  border: 4px solid darkblue;
  borderradius: 10px;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

export const TTTMain = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
`;

export const SelectPlayerBtnBox = styled.div`
  disply: flex;
`;

export const ScoreBoard = styled.div`
  display: flex;
`;

//타이틀
export const Title = styled.div`
  color: #39ff14;
  font-size: 2rem;
  font-familly: "Coda Caption", sans-seerif;
`;

// const animation = keyframes`
//     0% { background-position: 0 0; }
//     50% { background-position: 400% 0; }
//     100% { background-position: 0 0; }
// `;

export const TTTButton = styled.button`
  background: lightblue;
  border: 2px solid darkblue;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
`;

export const GreenDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-bottom: 5%;
    @media (max-width: 768px) {
      min-width: 150px;
      min-height: 30px;
    }
    min-width: 300px;
    min-height: 60px;
    font-family: "Nunito", sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #000;
    background: #39ff14;
    background: linear-gradient(
      90deg,
      rgb(129, 230, 129) 0%,
      rgb(142, 209, 79) 100%
    );
    border: none;
    border-radius: 3%;

    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
  }

  button:hover,
  button:focus {
    color: whitesmoke;
    transform: translateY(-6px);
  }
  button:hover:before,
  button:focus:before {
    opacity: 1;
  }

  button:after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    /* border: 6px solid #39ff14; */
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Credit = styled.div`
  color: white;
  font-size: 18px;
`;

export const Score = styled.span`
  color: ${({ turn, check }) => (turn === check ? "#39ff14" : "whitesmoke")};
  font-size: 50px;
`;
