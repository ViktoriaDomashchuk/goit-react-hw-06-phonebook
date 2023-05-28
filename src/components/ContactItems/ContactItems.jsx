import PropTypes from 'prop-types';
import { DeleteBtn, Item } from './ContactItems.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItems = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Item>
        {name}: {number}
      </Item>
      <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
    </>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
}.isRequired;