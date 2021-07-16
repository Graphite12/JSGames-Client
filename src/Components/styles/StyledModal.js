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
`;

export const Auth_Container = styled.section`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: 900px;
  height: 550px;
  margin: 0 auto 100px;
  background: #fff;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.3),
    10px 10px 15px rgba(70, 70, 70, 0.15),
    inset -10px -10px 15px rgba(255, 255, 255, 0.3),
    inset 10px 10px 15px rgba(70, 70, 70, 0.15);
`;

export const Sub_AuthContaiiner = styled.div`
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
`;

export const Sub_ImgContainer = styled.div`
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 900px;
    height: 100%;
    background-image: url("ext.jpg");
    opacity: 0.8;
    background-size: cover;
    -webkit-transition: -webkit-transform 1.2s ease-in-out;
    transition: transform 1.2s ease-in-out;
    transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
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
