import styled, { css } from "styled-components";
import footerBg from "../../image/footerbg1.jpg";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;

  position: relative;
  background-color: #3c3c3c;
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 80%;
  position: absolute;
`;

export const FooterLinkBox = styled(FooterBox)`
  left: 10%;
  width: 55%;
  padding: 1%;

  border-radius: 3px;

  header {
    position: absolute;
    left: 2%;
    top: 0%;

    h1 {
      font: bold 80px arial, sans-serif;
      background-color: #000000;
      color: transparent;
      text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
    }
  }

  .info {
    position: absolute;
    top: 55%;

    font: bold 20px arial, sans-serif;
    background-color: #000000;
    color: transparent;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
`;

export const FooterSocialBox = styled(FooterBox)`
  width: 400px;

  right: 10%;
  padding: 1% 0;
  justify-content: flex-end;

  .social-box {
    width: 90%;
    height: 40%;
    padding: 1% 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 20px;
    background-color: inherit;
    .icon {
      width: 50px;
      height: 50px;

      border-radius: 50%;

      cursor: pointer;
    }

    .github-icon {
      color: blue;
    }

    .BloggerB-icon {
      color: green;
    }

    .Blogger-icon {
      color: orange;
    }
  }
`;
