import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem.jsx';
import CartEmpty from '../components/CartEmpty.jsx';
import '../styles/cart.scss';
import { Toaster } from 'react-hot-toast';

function Cart()
{

    const {cart} = useSelector((state)=>state);

    const [totalAmount,setTotalAmount] = useState(0);

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr) => acc+curr.price,0).toFixed(2));
    },[cart]);

    return(
        <div className='cart-container'>
            {
                cart.length === 0 ? (<CartEmpty/>) :
                (
                    <div className="cart-container-parent">
                        <div className='cart-item-container'>
                            {
                                cart.map((item,index)=>(
                                    <CartItem item={item} />
                                ))
                            }
                        </div>
                        <div className="cart-item-info-container">
                            <h3>YOUR CART</h3>
                            <h1>SUMMARY</h1>
                            <div className="cart-item-info-details">
                                <div className="cart-item-info-length">
                                    <p>Total Items: <span>{cart.length}</span></p>
                                </div>
                                <div className="cart-item-info-amount">
                                    <p>Total Amount: <span>${totalAmount}</span></p>
                                </div>
                                <div className='checkout-btn'>
                                    <button>Checkout Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <Toaster/>
        </div>
    );
}

export default Cart;