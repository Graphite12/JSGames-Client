import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
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

  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailInputValue = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(mailerState);
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    // console.log(mailerState);
    axios
      .post(`https://localhost:5000/contact`, mailerState, {
        headers: { "Content-Type": "application/json" },
      })
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
        setMailerState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <StyledSectonE ref={refE} id="OtherContainer">
      <SectionEScreen>
        <Left_Box>
          <p>Contact Us</p>
          <Monitor>
            <div className="laptop_screen"></div>
            <div className="task_bar"></div>
          </Monitor>
          <Body></Body>
        </Left_Box>
        <Right_Box>
          <p>HAVE SOME QUESTIONS?</p>
          <Form onSubmit={submitEmail}>
            <input
              type="text"
              name="name"
              value={mailerState.name}
              onChange={emailInputValue}
              placeholder="yourName"
              required
            />
            <input
              type="email"
              name="email"
              value={mailerState.email}
              onChange={emailInputValue}
              placeholder="youremail@gmail.com"
              required
            />
            <input
              type="text"
              placeholder="subject"
              name="subject"
              value={mailerState.subject}
              placeholder="subject ex) 제목 작성"
              onChange={emailInputValue}
            />
            <textarea
              name="message"
              value={mailerState.message}
              onChange={emailInputValue}
              placeholder="전달할 메세지를 작성"
            />
            <button>Send Email</button>
          </Form>
        </Right_Box>
      </SectionEScreen>
    </StyledSectonE>
  );
}
