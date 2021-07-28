import { TTTButton } from "../styles/tttStyles";

export default function Square({ value, onClick }) {
  return <TTTButton onClick={onClick}>{value}</TTTButton>;
}
