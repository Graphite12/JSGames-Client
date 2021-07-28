import { GreenDiv } from "../styles/tttStyles";

export default function GreenButton({ onClick, children }) {
  return (
    <GreenDiv>
      <button onClick={onClick}>{children}</button>
    </GreenDiv>
  );
}
