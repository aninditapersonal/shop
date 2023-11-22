import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Gallery from './Pages/Gallery';
import { useState } from 'react';
import items from './Context/items';
import Footer from './Pages/Footer';
import Cart from './Pages/Cart';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const removeFromCart = (item) => {
    const temp = cart.filter((c) => c.item.id === item.id);
    if (temp.length > 0) {
      const obj = temp[0];
      if (obj.quantity > 1) {
        obj.quantity -= 1;
        setCart([...cart]);
      }
      else {
        const newCart = cart.filter((c) => c.item.id !== item.id);
        setCart([...newCart]);
      }
    }
  }

  const addToCart = (item) => {
    const temp = cart.filter((c) => c.item.id === item.id);
    if (temp.length > 0){
      temp[0].quantity += 1;
      setCart([...cart])
    }
    else {
      const obj = {
        item: item,
        quantity: 1,
      }
      setCart([...cart, obj]);
    }
  }

  return (
    <>
      <Navbar index={pageIndex} setIndex={setPageIndex} search={search} setSearch={setSearch} cart={cart}/>
      {
        pageIndex === 0 ? <Gallery addToCart={addToCart} list={items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))}/> :
        pageIndex === 1 ? <Gallery addToCart={addToCart} list={items.filter((item) => item.category === 'MEN' && item.name.toLowerCase().includes(search.toLowerCase()))} /> :
        pageIndex === 2 ? <Gallery addToCart={addToCart} list={items.filter((item) => item.category === 'WOMEN' && item.name.toLowerCase().includes(search.toLowerCase()))} /> :
        pageIndex === 3 ? <Gallery addToCart={addToCart} list={items.filter((item) => item.category === 'KIDS' && item.name.toLowerCase().includes(search.toLowerCase()))} /> :
        pageIndex === 4 ? <Cart cart={cart} setCart={setCart} addToCart={addToCart} removeFromCart={removeFromCart}/> :
        <></>
      }
      <Footer/>
    </>
  );
}

export default App;
