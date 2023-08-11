import React from 'react';

// Composant fonctionnel Tags qui prend une prop "content"
const Tag = ({ content }) => {
  return <p className='categoryButton'>{content}</p>;
};

export default Tag; 