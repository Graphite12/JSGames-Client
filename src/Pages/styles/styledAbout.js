import styled, { keyframes } from "styled-components";
import arcade4 from "../../image/arcade5.jpg";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

export const AboutContent = styled.div`
  width: 80%;
  height: 85%;
  margin-top: 2%;
  background: black;
  border-radius: 10px;
`;

export const DefaultScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const DefaultImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

export const StyledSectonD = styled.section`
  display: flex;
  height: 90vh;
  background-image: url(${arcade4});
  background-size: contain;
  z-index: 3;
`;

export const SectionDScreen = styled(DefaultScreen)`
  height: 100%;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: none;
`;

// export const TabContainer = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;

// `;

export const ToggleBox = styled.div`
  position: absolute;
  margin: 0 auto;
  bottom: 10%;
  font-size: 2rem;
  z-index: 9;
  color: white;
`;

export const TabMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  color: white;
  height: 50%;

  margin-top: ;
`;

export const TabSideBar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ isSidebar }) => (isSidebar ? "5%" : "20%")};
  height: 100%;

  background: inherit;
  padding: 0 1%;
  max-width: 400px;
  min-width: 100px;
  position: relative;
  transition: ${({ isSidebar }) =>
    isSidebar ? " 0.2s linear all;" : "0.2s linear all;"};

  z-index: 8;

  header {
    margin-top: 25%;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
`;

export const TabMenu = styled.li`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30%;
  width: 100%;

  &:hover {
    color: whitesmoke;
  }
`;

export const TabItems = styled.span`
  display: flex;
  width: 100%;
  justify-content: ${({ isSidebar }) => (!isSidebar ? "flex-start" : "center")};
  align-items: "center" 

  top: 20%;
`;

export const TabIcon = styled.img`
  width: 3rem;
  margin-right: ${({ isSidebar }) => (isSidebar ? "0" : "15%")};
`;

export const TabText = styled.p`
  display: ${({ isSidebar }) => (isSidebar ? "none" : "inline")};
`;

export const TabsContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ isSidebar }) => (isSidebar ? "95%" : "85%")};
  transition: 0.3ss linear all;
  height: 100%;

  // @supports (backdrop-filter: blur(50px)) or
  //   (--webkit-backdrop-filter: blur(50px)) {
  //   & {
  //     background-color: rgba(255, 255, 255, 0.2);
  //     border: 1px solid rgba(255, 255, 255, 0.2);

  //     backdrop-filter: blur(20px);
  //   }
  // } ;

  .btn-box {
    z-index: 9;
    position: absolute;
    bottom: 5%;
  }
`;
