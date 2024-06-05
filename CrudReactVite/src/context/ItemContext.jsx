import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => {
        setItems(response.data.map(item => item.title)); 
      })
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const addItem = (item) => {
   
    setItems([...items, item]);

    
    axios.post('https://jsonplaceholder.typicode.com/posts', { title: item })
      .then(response => console.log('Item added:', response.data))
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
