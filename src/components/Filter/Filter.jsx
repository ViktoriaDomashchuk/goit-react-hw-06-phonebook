import { Label, Input } from './Filter.styled';
import { nanoid } from 'nanoid';
import { setFilter } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getValueFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getValueFilter);
  const idInput = nanoid();

  return (
    <>
      <Label htmlFor="idInput">Find contacts by name</Label>
      <Input
        type="text"
        value={value}
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
        id={idInput}
      ></Input>
    </>
  );
};