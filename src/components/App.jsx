import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import SyncLoader from 'react-spinners/SyncLoader';

import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

import { Container, Header, Loader } from './App.styled';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Header>Phonebook</Header>
      <ContactForm />

      <Header>Contacts</Header>
      <Filter />

      {isLoading && !error ? (
        <Loader>
          <SyncLoader color="#2f9e99" />
        </Loader>
      ) : (
        <ContactsList />
      )}
    </Container>
  );
}
