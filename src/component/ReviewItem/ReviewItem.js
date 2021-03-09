import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, seller, img, stock,key } = props.cart;
    //console.log(props);
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>

                <p><small>by: {seller}</small></p>
                <p>${price}</p>

                <p><small>Only {stock} left in stock - Order soon</small></p>
                <p>Order quantity:{quantity}</p>
                <button
                    className='btn'
                    onClick={() => props.removeProduct(key)}
                >Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;