import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { nanoid } from "nanoid";

export const Filter = ({ onChange, value }) => {
  const idInput = nanoid();
  return (
    <>
      <Label htmlFor="idInput">Find contacts by name</Label>
      <Input type="text" onChange={onChange} value={value} id={idInput}></Input>
    </>
  );
};

Filter.prototypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}.isRequired