import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item, Notice } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  //----Рендер----
  return contacts.length > 0 ? (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </List>
  ) : (
    <Notice>There is nothing to show... ☹️</Notice>
  );
};
