import { InputGroup, Input, Status } from "./styles/StyledAuthForm";

const Inputs = ({ type, placeholder }) => {
  return (
    <InputGroup>
      <Input
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
      <Status />
    </InputGroup>
  );
};

export default Inputs;
