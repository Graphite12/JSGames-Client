import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  StyledSectonC,
  StyledSectonD,
  StyledSectonE,
  SectionEScreen,
  ContacUsBox,
  Left_Box,
  Right_Box,
  Monitor,
  Form,
  Body,
} from "../styles/StyledNumScreen";

import { useSubNav } from "../CustomHooks/useSubNav";
import { sendMail } from "../../../_actions/mailer_action";

export default function SectionE() {
  const refE = useSubNav("Other");
  const dispatch = useDispatch();
  const history = useHistory();

  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailInputValue = (key) => (e) => {
    if (key === "name") setMailerState(e.target.value);
    if (key === "email") setMailerState(e.target.value);
    if (key === "msg") setMailerState(e.target.value);
  };

  console.log(mailerState);
  const submitEmail = async (e) => {
    e.preventDefault();

    dispatch(sendMail(mailerState));
    // setMailerState({
    //   email: "",
    //   name: "",
    //   message: "",
    // });
  };

  return (
    <StyledSectonE ref={refE} id="OtherContainer">
      <SectionEScreen>
        <Left_Box>
          <Monitor>
            <div className="laptop_screen"></div>
            <div className="task_bar"></div>
          </Monitor>
          <Body></Body>
        </Left_Box>
        <Right_Box>
          <p>Contact Us</p>
          <Form onSubmit={submitEmail}>
            <input
              type="text"
              name="name"
              onChange={emailInputValue("name")}
              required
            />
            <input
              type="email"
              namer="email"
              onChange={emailInputValue("email")}
              required
            />
            <textarea
              name="message"
              onChange={emailInputValue("msg")}
              placeholder="message"
            />
            <button>Send Email</button>
          </Form>
        </Right_Box>
      </SectionEScreen>
    </StyledSectonE>
  );
}
