import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    object-fit: contain;
    
}

html,body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Hel7vetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
`;
export default GlobalStyles;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 100%;
  width: 100%;
`;

export const AuthButton = styled.button``;

export const GlobalButton = styled.button``;

export const StartButton = styled.button``;

export const NavButton = styled.button``;
