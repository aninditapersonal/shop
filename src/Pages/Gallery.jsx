import React, { useEffect, useState } from 'react'
import Item from '../Components/Items/Item'
import './Pages.css'

const Gallery = ({list}) => {
  const [fl, setFl] = useState([]);
  useEffect(() => {
    if(list) setFl([...list]);
  }, [list]);

  return (
    <main className='gallery'>
      <div className="item-container">
        {fl.map((item) => <Item 
                            key={item.id}
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                            offer={item.offer} 
                            delivery={item.delivery}
                            size={item.size}/>)}
      </div>
    </main>
  )
}

export default Gallery