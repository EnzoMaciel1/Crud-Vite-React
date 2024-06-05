import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const ItemList = () => {
  const { items } = useContext(ItemContext);

  return (
    <div>
      <h2>Lista de Itens</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
