import PropTypes from 'prop-types';
import { DeleteBtn } from './ContactItems.styled';


export const ContactItems = ({ item: { id, name, number}, onDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <DeleteBtn onClick={() => onDelete(id)}>Delete</DeleteBtn>
    </>
  );
};



ContactItems.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
}.isRequired