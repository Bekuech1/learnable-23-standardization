import { Footer } from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BestSeller from "../../components/bestSeller/BestSeller";
import Logos from "../../components/logos/Logos";
import './Cart.css'
import CartItem from "../../components/cartItem/CartItem";



export default function Cart () {
    return(
        <>
            <Navbar/>
            <div className="grey-background">
                <div className="shop-top">
                    <a href="home">Home</a>
                    <a href="shop">shop</a>
                    <h6 id="shop-remove">shopping cart</h6>
                </div>
                <div className="cart-details">
                    <div className="shop-cart">
                            <h4>shopping cart</h4>
                        <div className="cart-bottom">
                            <div id="cart-title">
                                <p>item details</p>
                                <p>qauntity</p>
                                <p>price</p>
                            </div>
                            <CartItem/>
                            <CartItem/>
                        </div>
                    </div>
                    <div className="order-summary">
                        <div className="order-summary-row1">
                            <h5>Order Summary</h5>
                            <h6>4 items</h6>
                        </div>
                        <div className="order-summary-row2">
                            <h6>delivery charges</h6>
                            <a href="">add your delivery address to checkout to see delivery charges</a>
                        </div>
                        <div className="order-summary-row3">
                            <h5>subtotal</h5>
                            <h6>$26,500</h6>
                        </div>
                        <div className="order-summary-row4">
                            <h4>total</h4>
                            <h4>$26,500</h4>
                        </div>
                        <div className="order-summary-row5">
                            <p>excluding delivery charges</p>
                        </div>
                        <div className="order-summary-row6 ">
                            <button>proceed to checkout</button>
                            <div className="row-6-img">
                                <img src="images/paystack.jpg" alt="" />
                                <img src="images/mastercard.jpg" alt="" />
                                <img src="images/visa.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop-bestseller">
                    <div className="shop-bestseller-text">
                        <p>products related to items in your cart</p>
                    </div>
                    <div className="shop-bestseller-row">
                        <BestSeller/>
                        <BestSeller/>
                        <BestSeller/>
                        <BestSeller/>
                    </div>
                    <div className="shop-bestseller-row">
                        <BestSeller/>
                        <BestSeller/>
                        <BestSeller/>
                        <BestSeller/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}