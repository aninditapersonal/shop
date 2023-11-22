import React from 'react'
import './Item.css'
import { MdAdd, MdRemove} from "react-icons/md";

const CartItem = ({name, image, price, offer, delivery, size, quantity, plusHandle, minusHandle}) => {
  return (
    <div className="cart-item">
        <div className="item-logo">
            <img src={image} alt="" />
        </div>
        <div className="item-details">
            <p className='item-name'>{name}</p>
            <p className="price">
                M.R.P.
                <span className='original'>{price}.00</span>
                <span className='sale'>{Math.ceil(price-(price*offer/100))}.00</span>
            </p>
            <p className='discount'>Upto <span>{offer}%</span> off</p>
            <p className='delivery'>{delivery === 0?'Free delivery':`Rs. ${delivery} extra for delivery`}</p>
        </div>
        <div className="quantity-details">
            <div className="extra">
                <p>Quantity</p>
                <div className="quantity">
                    <MdRemove className='quantity-button n' onClick={minusHandle}/>
                    <span className='quantity-count'>{quantity}</span>
                    <MdAdd className='quantity-button p' onClick={plusHandle}/>
                </div>
            </div>
            <div className="extra">
                <h4>Subtotal</h4>
                <p className="price">
                    <span className='sale'>{quantity*Math.ceil(price-(price*offer/100))}.00</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CartItem