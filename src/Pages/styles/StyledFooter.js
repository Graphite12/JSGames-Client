import styled, { css } from "styled-components";
import footerBg from "../../image/footerbg1.jpg";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;

  position: relative;
  // background-color: rgb(13, 33, 52);
  background-image: url(${footerBg});
  background-size: cover;
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 90%;
  position: absolute;
`;

export const FooterLinkBox = styled(FooterBox)`
  left: 10%;
  width: 55%;
  padding: 1%;
  border: 1px solid black;
  border-radius: 3px;

  h1 {
    position: absolute;
    left: 2%;
    font-size: 2rem;
    font-weight: bold;
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
      width: 70px;
      height: 70px;

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
