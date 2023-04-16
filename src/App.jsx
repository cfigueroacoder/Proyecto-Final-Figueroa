import './App.css';
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

export function App() {
  
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
    );
}
