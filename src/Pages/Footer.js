import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTumblr,
  faBlogger,
  faBloggerB,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons";
import {
  FooterLinkBox,
  FooterSocialBox,
  StyledFooter,
} from "./styles/StyledFooter";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLinkBox>
        <header>
          <h1>JavaScript Games</h1>
        </header>
        <div className="info">
          <span className="info-email">{`Email: elitebook855@gmail.com`}</span>
        </div>
        <span></span>
      </FooterLinkBox>
      <FooterSocialBox>
        <div className="social-box">
          <FIcon icon={faGithub} className="icon github-icon" />
          <FIcon icon={faVimeoV} className="icon BloggerB-icon" />
          <FIcon icon={faTumblr} className="icon Blogger-icon" />
        </div>
      </FooterSocialBox>
    </StyledFooter>
  );
}
