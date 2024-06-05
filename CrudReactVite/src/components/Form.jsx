import React, { useState, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const Form = () => {
  const { addItem } = useContext(ItemContext);
  const [item, setItem] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() === '') {
      setError('O campo não pode estar vazio');
      return;
    }
    addItem(item);
    setItem('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item:</label>
      <input
        type="text"
        id="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Adicionar Item</button>
    </form>
  );
};

export default Form;
