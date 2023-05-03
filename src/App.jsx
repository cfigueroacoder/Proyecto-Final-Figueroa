import './App.css';
import 'react-toastify/dist/ReactToastify.css';
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from './context/DarkModeContext';

//React Toastify
import { ToastContainer } from 'react-toastify';

//Components
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './components/Checkout/Checkout';
import { Cart } from './components/Cart/Cart';

export function App() {
  //initDB()
  
  return (
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/catalog/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout/' element={<Checkout />} />
            <Route path='/cart/' element={<Cart />} />
            <Route path='/*' element={<h1>404 - Página no encontrada</h1>} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    );
}
