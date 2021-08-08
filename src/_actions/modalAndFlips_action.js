import { MAF } from "./types";

export function showModal() {
  return {
    type: MAF.SHOW_MODAL,
  };
}

export function hideModal() {
  return {
    type: MAF.HIDE_MODAL,
  };
}

export function flipIcon() {
  return {
    type: MAF.FLIPS_ICON,
  };
}

export function flipCard() {
  return {
    type: MAF.FLIPS_CARD,
  };
}

export function flipLoginCard() {
  return {
    type: MAF.FLIPS_LOGIN_CARD,
  };
}
export function flipRegisterCard() {
  return {
    type: MAF.FLIPS_REGISTER_CARD,
  };
}
