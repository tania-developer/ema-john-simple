import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    
    const cart = props.cart;
    const total = cart.reduce((total,prd)=> total + prd.price * prd.quantity, 0); 
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99
    }

    const tax = Math.round(total/10);
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered:{cart.length}</p>
            <p>Product Price: {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {total+shipping+tax}</p>  
            <br/>
            <button className="btn"><Link to="/order">Review Item</Link></button>
        </div>
    );
};

export default Cart;