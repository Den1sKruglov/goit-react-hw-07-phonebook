import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

import { Form, Header, Input, Submit } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  //----Добавляем контакты----
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    if (
      contacts.map(contact => contact.name).includes(form.elements.name.value)
    ) {
      Notiflix.Notify.failure(
        `${form.elements.name.value} is already in contacts.`
      );
    } else {
      dispatch(
        addContact({
          name: form.elements.name.value,
          phone: form.elements.number.value,
        })
      );
    }

    form.reset();
  }

  //----Рендер----
  return (
    <Form onSubmit={handleSubmit}>
      <Header>Name</Header>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Header>Number</Header>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Submit type="submit">Add contact</Submit>
    </Form>
  );
}
