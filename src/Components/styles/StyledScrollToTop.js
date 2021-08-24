import styled from "styled-components";

export const ScrollToTopBox = styled.div`
  width: 70px;
  height: 0px;
  position: fixed;
  top: 50%;
  right: 2%;
  z-index: 30;

  opacity: ${({ isVisible }) => (!isVisible ? "0" : "1")};

  transition: all 0.3s ease-in-out;
`;

export const ToUpBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;

  border-radius: 50%;
  background: rgba(0,0,0,0.3);
  color: whitesmoke;
  font-weight: bold;
  font-size: 2rem;
  box-shadow: 0px 2px 6px -1px rgba(0,0,0,0.8);

  transition: all 300ms ease-in-out;
  &:hover {
    transform: perspective(500px) translateZ(30px)
    
  }

  @supports (backdrop-filter: none) {
    .container {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
`;
