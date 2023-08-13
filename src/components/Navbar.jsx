import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/ShoopingCartLogo.png';
import {FaShoppingCart} from 'react-icons/fa';
import '../styles/colors.scss';
import '../styles/navbar.scss';
import { AppContext } from '../context/AppContext';
import BasicModal from './Modal';
import { useSelector } from 'react-redux';

function Navbar()
{

    const { category, setCategory , setToSearch , toSearch } = useContext(AppContext);

    const {cart} = useSelector((state)=>state);

    return(
        <div className='navbar-container'>
            <NavLink to="/">
                <div className='navbar-container-img'>
                    <img src={logo} alt="Logo"/>
                </div>
            </NavLink>
            <div className='navbar-container-content'>
                <NavLink to="/" style={{textDecoration:'none'}}><p>Home</p></NavLink>
                <NavLink to="/cart"><FaShoppingCart style={{color:'white', fontSize:'1.5rem'}}/>
                {
                    cart.length === 0 ? 
                    (<span></span>) : 
                    (<span className='cart-length' id='cart-info'>{cart.length}</span>)
                }
                </NavLink>
                <div className='drop-down-box'>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="All"  selected>All</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                    </select>
                </div>
                <div className="modal">
                    <BasicModal/>
                </div>
                <div className='search-box'>
                        <input type="text" name="" id="" value={toSearch} placeholder='Type to search'
                        onChange={(e)=>{setToSearch(e.target.value)}}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;