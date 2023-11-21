import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Gallery from './Pages/Gallery';
import { useState } from 'react';
import items from './Context/items';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar index={pageIndex} setIndex={setPageIndex} search={search} setSearch={setSearch}/>
      {
        pageIndex === 0 ? <Gallery list={items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))}/> :
        pageIndex === 1 ? <Gallery list={items.filter((item) => item.category === 'MEN' && item.name.toLowerCase().includes(search.toLowerCase()))} /> :
        pageIndex === 2 ? <Gallery list={items.filter((item) => item.category === 'WOMEN' && item.name.toLowerCase().includes(search.toLowerCase()))} /> :
        pageIndex === 3 ? <Gallery list={items.filter((item) => item.category === 'KIDS' && item.name.toLowerCase().includes(search.toLowerCase()))} /> :
        <></>
      }
      
    </>
  );
}

export default App;
