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
        <h1>JavaScript Games</h1>
        <span>Email:email</span>
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
