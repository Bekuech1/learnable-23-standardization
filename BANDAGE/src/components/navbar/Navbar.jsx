import React from 'react';
import './Navbar.css'




export default function Navbar() {
    return(
        <>
        <div className="navbar-body">
            <div className="navbar-left">
                <h3>Bandage</h3>
            </div>
            <div className="navbar-right">
                <ul className='list-left'>
                    <li> <a href="/">Home</a></li>
                    <li id="active-nav"> <a href="/Shop">Shop</a></li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
                <div className='list-right'>
                    <button id='login'><img id='profile' src="icons/profile.svg" alt="" />Login / Register</button>
                    <button id='search'><img src="icons/search.svg" alt="" /></button>
                    <button><a href="/shoppingcart"><img src="icons/cart.svg" alt="" /></a></button>
                    <button><img src="icons/heart.svg" alt="" /></button>
                </div>
            </div>
        </div>
        <div className='navbar2'>
            <div className='nav1'>
                <h3>Bandage</h3>
                <div className='nav2'>
                    <button id='search'><img src="icons/search2.svg" alt="" /></button>
                    <button><a href="/shoppingcart"><img src="icons/cart2.svg" alt="" /></a></button>
                    <button><img src="icons/menu.svg" alt="" /></button>
                </div>
            </div>
            <div className='nav3'>
                <a href="/">Home</a>
                <a href="">product</a>
                <a href="">pricing</a>
                <a href="">contact</a>
            </div>
        </div>
        </>

    )
}