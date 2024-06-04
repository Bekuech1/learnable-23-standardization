import'./CartItem.css'

import React from 'react'

const CartItem = () => {
  return (
    <>
       <div className="cart-row">
                                <div className="cart-row1">
                                    <img src="images/cart-img.jpg" alt="" />
                                    <div>
                                        <h5>Graphic Design</h5>
                                        <h6>in stock</h6>
                                        <div id="cart-review">
                                            <div>
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                            </div>
                                            <p>28 reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-row2">
                                    <button><img src="icons/minus.svg" alt="" /></button>
                                    <div><h6>1</h6></div>
                                    <button id="cart-btn-blue"><img src="icons/plus.svg" alt="" /></button>
                                </div>
                                <div className="cart-row3">
                                    <h3>$3,000</h3>
                                    <h6>$3,000 X 1 item</h6>
                                </div>
                            </div>
                                <button id="remove-btn">
                                    <img src="icons/remove.svg" alt="" />
                                    remove
                                </button>

                                <div className='cart-item2'>
                                    <div className='item2-1'>
                                        <img src="images/cart-img.jpg" alt="" />
                                        <div>
                                            <h5>Graphic Design</h5>
                                            <div className="cart-row3">
                                                <h3>$4,000</h3>
                                                <h6>$4,000 X 1 item</h6>
                                            </div>
                                            <h6>in stock</h6>
                                            <div id="cart-review">
                                            <div>
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                                <img id="star-icon" src="icons/full-star.svg" alt="" />
                                            </div>
                                            <p>28 reviews</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='item2-2'>
                                    <button id="remove-btn">
                                        <img src="icons/remove.svg" alt="" />
                                        remove
                                    </button>
                                    <div className="cart-row2">
                                    <button><img src="icons/minus.svg" alt="" /></button>
                                        <div><h6>1</h6></div>
                                        <button id="cart-btn-blue"><img src="icons/plus.svg" alt="" /></button>
                                    </div>
                                    </div>
                                </div>
    </>
  )
}

export default CartItem