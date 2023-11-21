import React from 'react'
import './Item.css'

const Item = ({name, image, price, offer, delivery, size}) => {
  return (
    <div className="item">
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
        <div className="item-button">
            <button className='secondary'>Add to cart</button>
            <button className='primary'>Buy now</button>
        </div>
    </div>
  )
}

export default Item