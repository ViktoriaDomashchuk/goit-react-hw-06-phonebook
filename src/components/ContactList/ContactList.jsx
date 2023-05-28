import { List, Contact } from './ContactList.styled';
import { ContactItems } from '../ContactItems/ContactItems';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          <BsFillTelephoneFill />
          <ContactItems item={contact} />
        </Contact>
      ))}
    </List>
  );
};