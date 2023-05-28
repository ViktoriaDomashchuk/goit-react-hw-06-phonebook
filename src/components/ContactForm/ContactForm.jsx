import PropTypes from 'prop-types';
import { AddContactBtn, Label, FormAddContacts, ErrorText } from './ContactForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

const FormError = ({name}) => {
    return(
        <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>}
        />
    );
  };

export const ContactForm = ({ onSubmit }) => {
 
  const submitForm = (values, { resetForm }) => {
    const { name, number } = values;
    const dataContact = { name, number };
    
    resetForm();
    onSubmit(dataContact);
  };

  const nameInputId = nanoid();
  const telInputId = nanoid();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={submitForm}
    >
      <Form autoComplete="off">
        <FormAddContacts>
          <Label htmlFor={nameInputId}>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameInputId}
            />
            <FormError name="name" component="span" />
          </Label>

          <Label htmlFor={telInputId}>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={telInputId}
            />
            <FormError name="number" component="span" />
          </Label>
        </FormAddContacts>

        <AddContactBtn type="submit">Add contacts</AddContactBtn>
      </Form>
    </Formik>
  );
};


ContactForm.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
}.isRequired;