import { TYPE2 } from "../_actions/types";

const initialState = {
  mailStatus: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPE2.MAILER_STATUS:
      return { ...state, mailStatus: "success" };

    default:
      return state;
  }
}
