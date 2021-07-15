import { Panel, PanelContainer } from "./styles/StyledAuthForm";
import "./styles/StyledAuthForm.css";

require("dotenv").config();

export default function Panels(props) {
  return (
    <PanelContainer>
      <Panel className="left_panel"></Panel>
      <Panel className="right_panel"></Panel>
    </PanelContainer>
  );
}
