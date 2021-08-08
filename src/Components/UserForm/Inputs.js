import { InputGroup, Input, Status } from "./styles/StyledAuthForm";

const Inputs = ({ types, placeholder, value, onChange }) => {
  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        type={types ? types : "text"}
        value={value}
        onChange={onChange}
        required
        autocomplete="on"
      />
      <Status />
    </InputGroup>
  );
};

export default Inputs;
