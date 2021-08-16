import React from "react";

//styled
import { AboutContainer, AboutContent } from "./styles/styledAbout";

export default function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <div>
          <h1>이런 스택으록 구현했습니다.</h1>
        </div>
        <div>
          <h1>이렇게 즐기시면 됩니다.</h1>
        </div>
      </AboutContent>
    </AboutContainer>
  );
}
