import React from 'react';
import '../styles/cartempty.scss';
import { Link } from "react-router-dom";

function CartEmpty()
{
    return(
        <div className='cart-empty'>
            <h1>Your cart is empty!</h1>
            <br/>
            <div><Link to="/" style={{textDecoration:'none'}}><button>Shop Now</button></Link></div>
        </div>
    );
}

export default CartEmpty;