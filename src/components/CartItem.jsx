import React from 'react';
import '../styles/cartitem.scss';
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import {toast} from "react-hot-toast";
import {remove} from '../redux/Slices/CartSlice';

function CartItem({item})
{

    const title = `${item.title.substring(0,30)}....`;

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }

    return(
        <div className='cart-item-details'>
            <div className="item-img">
                <img src={item.image} alt="item" />
            </div>
            <div className="item-mini-details">
                <p>{title}</p>
                <div className='parent'>
                    <div className='price'><p>${item.price}</p></div>
                    <div className='btn-icon'><MdDelete onClick={removeFromCart} style={{color:'red',fontSize:'1.5rem'}}/></div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;