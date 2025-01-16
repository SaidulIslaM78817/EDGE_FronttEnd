// src/pages/HomePage.jsx
import React from 'react';
import useFetchData from '../hooks/useFetchData';
import DataList from '../components/DataList';

const HomePage = () => {
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts'); // Replace with your URL

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Home Page</h1>
      <DataList data={data} />
    </div>
  );
};

export default HomePage;
