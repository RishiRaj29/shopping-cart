import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from '../redux/Slices/CartSlice';
import {toast} from "react-hot-toast";
import '../styles/carditem.scss';
function CardItem({item})
{

    const title = `${item.title.substring(0,17)}....`;

    const description = `${item.description.substring(0,103)}....`;

    const {cart} = useSelector((state)=>state);

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }

    return(
        <div className='card-container'>
            <div className="card-title">
                <p>{title}</p>
            </div>
            <div className="card-desc">
                <p>{description}</p>
            </div>
            <div className="card-img">
                <img src={item.image} alt="Item"/>
            </div>
            <div className="card-info">
                <div className="card-price">${item.price}</div>
                <div className="card-btn">
                    {
                        cart.some((p) => p.id === item.id) ? (<button className='btn' onClick={removeFromCart}>REMOVE ITEM</button>) : 
                        (<button className='btn' onClick={addToCart}>ADD TO CART</button>)
                    }
                </div>
            </div>
        </div>
    );
}

export default CardItem;