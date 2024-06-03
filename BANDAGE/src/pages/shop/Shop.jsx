import BestSeller from "../../components/bestSeller/BestSeller";
import { Footer } from "../../components/footer/Footer";
import Logos from "../../components/logos/Logos";
import Navbar from "../../components/navbar/Navbar";
import './Shop.css'





export default function Shop () {
    return(
        <>
            <Navbar/>
            <div className="grey-background">
                <div className="shop-top">
                    <a href="home">Home</a>
                    <h6>shop</h6>
                </div>
                <div className="shop-2">
                    <div className="shop2-left">
                        <img className="shop-img1" src="images\shop1.jpg" alt="" />
                        <img className="shop-img2" src="images\shop2.jpg" alt="" />
                    </div>
                    <div className="shop2-right">
                        <h4>floating phone</h4>
                        <div className="shop-2-reviews">
                                <img src="icons/full-star.svg" alt="" />
                                <img src="icons/full-star.svg" alt="" />
                                <img src="icons/full-star.svg" alt="" />
                                <img src="icons/full-star.svg" alt="" />
                                <img src="icons/star.svg" alt="" />
                                <h6>10 reviews</h6>
                        </div>
                        <h3>$1,139.33</h3>
                        <h6>Availability  :<span>in stock</span></h6>
                        <p id="invisible-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <div className="shop-2-colors">
                            <div id="color1"></div>
                            <div id="color2"></div>
                            <div id="color3"></div>
                            <div id="color4"></div>
                            <div id="color5"></div>
                        </div>
                        <div className="shop-2-actions">
                            <button>select options</button>
                            <button id="circle-btn"><img src="icons/btn-heart.svg" alt="" /></button>
                            <button id="circle-btn"><img src="icons/btn-cart.svg" alt="" /></button>
                            <button id="circle-btn"><img src="icons/btn-eyee.svg" alt="" /></button> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-3">
                <div className="shop-3-top">
                    <a href="http://">Description</a>
                    <a href="http://">Additional Information</a>
                    <a href="http://">Reviews
                        <a id="green-link" href="http://">(0)</a>
                    </a>
                </div>
                <div className="shop-3-bottom ">
                    <div className="shop-down-left">
                        <h3>the quick fox jumps over </h3>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <div className="shop-row-text">
                            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        </div>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                    <div className="shop-down-right">
                        <img src="images\shop3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="grey-background">
                <div className="shop-bestseller">
                    <div className="shop-bestseller-text">
                        <p>BESTSELLER PRODUCTS</p>
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
                <Logos/>
            </div>
            <Footer/>
        </>
    )
}