import styled, { keyframes } from "styled-components";
import React from "react";

//타이틀
export const Title = styled.div`
  color: #39ff14;
  font-size: 2rem;
  font-familly: "Coda Caption", sans-seerif;
`;

const animation = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;

export const tttButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Luckiest+Guy&display=swap");
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "100px")};
  margin: 0.5%;
  border: none;
  outline: none;
  color: ${(props) => (props.color ? props.color : "#fff")};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#111"};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  font-size: 50px;
  font-family: "Coda Caption", sans-serif;
  font-family: "Luckiest Guy", cursive;
  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${animation} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  &:hover:before {
    opacity: 1;
  }
  &:active:after {
    background: transparent;
  }
  &:active {
    color: #000;
  }
`;

export const GreenDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  button {
    margin-bottom: 50px;
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
    border-radius: 1000px;
    box-shadow: 12px 12px 24px rgba(113, 235, 37, 0.64);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
  }
  button:before {
    content: "";
    border-radius: 1000px;
    @media (max-width: 768px) {
      min-width: calc(150px + 15px);
      min-height: calc(30px + 25px);
    }

    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid #39ff14;
    box-shadow: 0 0 60px rgba(129, 255, 64, 0.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
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
