import styled from "styled-components";
/*
  display: flex;
  justify-content: center;
  align-items: center;
*/
export const ModalBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0px;
  left: 0px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Main_Container = styled.section`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  z-index: 2;
  min-height: 700px;
`;

export const Right_Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  background-color: #3498db;
  width: 30%;
  position: absolute;
  right: 22%;
  border-radius: 6px;
  z-index: 1;
  transition: all 400ms ease-in-out;
  cursor: pointer;
  box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.281);

  &.right {
    right: 22%;
    align-items: flex-end;
    &:hover {
      right: 21%;
    }
  }
  &.left {
    right: -22%;
    align-items: flex-start;
    &:hover {
      right: -25%;
    }
  }

  .text {
    font-size: 21px;
    font-weight: 500;
    color: #fff;
    margin-right: 3em;
    margin-left: 3em;
  }
`;

export const Auth_box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
  border-radius: 4px;
  position: relative;
  z-index: 99;
  width: 100%;
  height: 100%;
  z-index: 99;
  padding: 17px 10px;
`;

export const Image_Text = styled.div`
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;

  h2 {
    margin-bottom: 10px;
    font-weight: normal;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const Image_Btn = styled.div`
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;

  &:after {
    content: "";
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 30px;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-transition: -webkit-transform 1.2s;
    transition: -webkit-transform 1.2s;
    transition: transform 1.2s;
    transition: transform 1.2s, -webkit-transform 1.2s;
  }
`;
