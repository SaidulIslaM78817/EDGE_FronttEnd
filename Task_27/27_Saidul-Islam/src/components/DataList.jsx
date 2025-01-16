// src/components/DataList.jsx
import React from 'react';

const DataList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
