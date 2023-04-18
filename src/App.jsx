import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar.jsx";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';

export function App() {
  
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/catalog/:category' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/' element={<Cart/>} />
            <Route path='/*' element={<h1>404 - Página no encontrada</h1>} />
          </Routes>
      </BrowserRouter>
    );
}
