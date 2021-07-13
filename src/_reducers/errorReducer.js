import { TYPES } from "../_actions/types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.GET_ERROR:
      return {
        msg: payload.msg,
        status: payload.status,
        id: payload.id,
      };

    case TYPES.CLEAR_ERROR:
      return {
        msg: {},
        status: null,
        id: null,
      };

    default:
      return state;
  }
}
