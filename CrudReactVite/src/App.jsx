import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import ItemList from './components/ItemList';
import { ItemProvider } from './context/ItemContext';

const App = () => {
  return (
    <ItemProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Bem-vindo à Aplicação</h1>} />
          <Route path="/form" element={<Form />} />
          <Route path="/items" element={<ItemList />} />
        </Routes>
      </div>
    </ItemProvider>
  );
};

export default App;
