import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

import { Text, Container, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  //----Обновляем фильтр----
  function changeFilter(event) {

    dispatch(contactsFilter(event.currentTarget.value));
  }

  return (
    <Container>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={changeFilter} />
    </Container>
  );
};
