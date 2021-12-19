import React from 'react';
import FlatList from '../../components/FlatList';
import Title from '../../components/Title';
import { useFetch } from '../../../hooks/useFetch';
import User from './components/User';

const Users: React.FC = () => {
  const { data = [] } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <>
      <Title variant="primary">Users</Title>

      <FlatList
        data={data}
        component={({ name, email }) => <User name={name} email={email} />}
      />
    </>
  );
};

export default Users;
