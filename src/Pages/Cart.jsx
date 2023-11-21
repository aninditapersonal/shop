import React from 'react'
import './Pages.css'
import CartItem from '../Components/Items/CartItem'

const Cart = ({cart, setCart}) => {
  return (
    <main className='cart'>
      <div className="cart-left">
        {
          cart.map((c) => <CartItem 
                              key={c.item.id}
                              name={c.item.name} 
                              image={c.item.image} 
                              price={c.item.price} 
                              offer={c.item.offer} 
                              delivery={c.item.delivery}
                              size={c.item.size}
                              />)
        }
      </div>
      <div className="cart-right">
        <h2>Price Details</h2>
        <div className="price-details">
          <div className="price-details-child">
            <p>Price</p>
            <p className='amount'>.00</p>
          </div>
          <div className="price-details-child">
            <p>Discount</p>
            <p className='amount'>- .00</p>
          </div>
          <div className="price-details-child">
            <p>Delivery Charge</p>
            <p className='amount'>.00</p>
          </div>
        </div>
        <div className="total">
          <h4>Total amount</h4>
          <h4 className='amount'>100.00</h4>
        </div>
        <button className='order-button'>Place order</button>
      </div>
    </main>
  )
}

export default Cart