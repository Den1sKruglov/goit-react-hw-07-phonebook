import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';

import { Text, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  //----Удаляем контакты----
  function handleDelete() {
    dispatch(deleteContact(contact.id));
  }

  //----Рендер----
  return (
    <>
      <Text>
        {contact.name}: {contact.phone}
      </Text>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
