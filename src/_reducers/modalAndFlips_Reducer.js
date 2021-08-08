import { MAF } from "../_actions/types";

const initialState = {
  isModal: false,
  isIconFlips: false,
  isCardFlips: false,
  isLoginCard: false,
  isRegisterCard: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MAF.SHOW_MODAL:
      return { ...state, isModal: true };

    case MAF.HIDE_MODAL:
      return { ...state, isModal: false };

    case MAF.FLIPS_ICON:
      return { ...state, isIconFlips: !state.isIconFlips };

    case MAF.FLIPS_CARD:
      return {
        ...state,
        isCardFlips: !state.isCardFlips,
      };

    case MAF.FLIPS_LOGIN_CARD:
      return {
        ...state,
        isLoginCard: !state.isLoginCard,
      };

    case MAF.FLIPS_REGISTER_CARD:
      return {
        ...state,
        isRegisterCard: !state.isRegisterCard,
      };

    default:
      return state;
  }
}
