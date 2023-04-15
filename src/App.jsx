import './App.css';
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'

export function App() {
  
  //Navbar esta nesteado en otro div debido a que en el futuro no va ser el unico child del div de clase 'header'
  return (
    <>
      <div className='header'>
        <Navbar />
      </div>
      <ItemListContainer />
    </>
    );
}
