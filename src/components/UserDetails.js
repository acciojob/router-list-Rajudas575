import React from 'react';
import { useParams, Link } from 'react-router-dom';

const items = [
  { id: '1', name: 'Item 1', description: 'This is the description for Item 1' },
  { id: '2', name: 'Item 2', description: 'This is the description for Item 2' },
  { id: '3', name: 'Item 3', description: 'This is the description for Item 3' },
];

const UserDetail = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default UserDetail;
