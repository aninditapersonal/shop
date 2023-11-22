import React, { useEffect, useState } from 'react'
import './Pages.css'
import CartItem from '../Components/Items/CartItem'

const Cart = ({cart, setCart, addToCart, removeFromCart}) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [ delivery, setDelivery] = useState(0);

  useEffect(() => {
    let pr=0, de=0, di=0;
    cart.forEach(c => {
      pr = (pr + (c.item.price*c.quantity));
      di = (di + c.quantity*Math.floor(c.item.price*c.item.offer/100));
      de = (Math.max(delivery, c.item.delivery));
    });
    console.log(pr, de, di);
    setPrice(pr);
    setDiscount(di);
    setDelivery(de);
  }, [cart])

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
                              quantity={c.quantity}
                              plusHandle={() => addToCart(c.item)}
                              minusHandle={() => removeFromCart(c.item)}
                              />)
        }
      </div>
      <div className="cart-right">
        <h2>Price Details</h2>
        <div className="price-details">
          <div className="price-details-child">
            <p>Price</p>
            <p className='amount'>{price}.00</p>
          </div>
          <div className="price-details-child">
            <p>Discount</p>
            <p className='amount'>- {discount}.00</p>
          </div>
          <div className="price-details-child">
            <p>Delivery Charge</p>
            <p className='amount'>{delivery}.00</p>
          </div>
        </div>
        <div className="total">
          <h4>Total amount</h4>
          <h4 className='amount'>{price + delivery - discount}.00</h4>
        </div>
        <button className='order-button' onClick={() => {
          if(cart.length > 0) alert("Your order has been placed!");
          else alert("Your cart is empty!");
          setCart([]);
        }}>Place order</button>
      </div>
    </main>
  )
}

export default Cart