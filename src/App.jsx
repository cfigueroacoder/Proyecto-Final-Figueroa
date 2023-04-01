import './App.css';
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'

export function App() {
  
  return (
    <>
      <div className='header'>
        <Navbar />
      </div>
      <div className='product-container'>
        <ItemListContainer message={'productos'}/>
      </div>
    </>
    );
}
