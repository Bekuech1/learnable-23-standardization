import Navbar from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import './Home.css'
import FeaturedCard from "../../components/featuredCard/featuredCard";
import React from "react";
import Productcard from "../../components/productcard/Productcard";


export default function Home () {
    return(
        <>
        <Navbar/>
        <div className="home-top"> 
            <div className="home-1">
                <h6 id="green-1">5 items</h6>
                <h2>furniture</h2>
                <h6>read more</h6>
            </div>
            <div className="bg-1">
                <div className="home-2">
                    <h6 id="green-1">5 items</h6>
                    <h3>furniture</h3>
                    <h6>read more</h6>
                </div>
                <div className="bg-2">
                    <div className="home-3">
                        <h6 id="green-1">5 items</h6>
                        <h3>furniture</h3>
                        <h6>read more</h6>
                    </div>
                    <div className="home-4">
                        <h6 id="green-1">5 items</h6>
                        <h3>furniture</h3>
                        <h6>read more</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-featured">
            <h4>featured products</h4>
            <h3>bestseller product</h3>
            <p>Problems trying to resolve the conflict within</p>
            <div className="product-row">
                <Productcard/>
                <Productcard/>
                <Productcard/>
                <Productcard/>
                <Productcard/>              
            </div>
            <div className="product-row">
                <Productcard/>
                <Productcard/> 
                <Productcard/> 
                <Productcard/> 
                <Productcard/>               
            </div>
            <button>load more products</button>
        </div>
        <div className="best-services">
            <h4>featured products</h4>
            <h3>the best services</h3>
            <p>Problems trying to resolve the conflict within</p>
            <div className="best-services-row">
                <div className="services-text">
                    <img src="icons/easywins.svg" alt="" />
                    <h3>easy wins</h3>
                    <p>Get your best looking smile now!</p>
                </div>
                <div className="services-text">
                    <img src="icons/concrete.svg" alt="" />
                    <h3>concrete</h3>
                    <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
                <div className="services-text">
                    <img src="icons/hackgrowth.svg" alt="" />
                    <h3>hack growth</h3>
                    <p>Overcome any hurdle or any other problem.</p>
                </div>
            </div>
        </div>
        <div className="featured-posts">
            <h6>practice advice</h6>
            <h2>featured products</h2>
            <div className="featured-row">
                <div className="featured-container">
                    <div className="featured-1">
                        <div>
                            <h6>new</h6>
                        </div>
                    </div>
                    <FeaturedCard/>
                </div>
                <div className="featured-container" id="featured-middle">
                    <div className="featured-2">
                        <div>
                            <h6>new</h6>
                        </div>
                    </div>
                    <FeaturedCard/>
                </div>
                <div className="featured-container">
                    <div className="featured-3">
                        <div>
                            <h6>new</h6>
                        </div>
                    </div>
                    <FeaturedCard/>
                </div>
            </div>
        </div>
        <div className="about-us">
            <div className="about-us1">
                <h3>What they say about us</h3>
                <div id="about-profile"></div>
                <div className="home-rating">
                    <img src="icons/full-star.svg" alt="" />
                    <img src="icons/full-star.svg" alt="" />
                    <img src="icons/full-star.svg" alt="" />
                    <img src="icons/full-star.svg" alt="" />
                    <img src="icons/star.svg" alt="" />
                </div>
                <h6>Slate helps you see how many more days you need to work to reach your financial goal.</h6>
                <div className="about-name">
                    <a href="">Regina Miles</a>
                    <h6>Designer</h6>
                </div>
            </div>
            <div className="about-us2">
                <div className="about-row">
                    <div className="row-1"></div>
                    <div className="row-2"></div>
                    <div className="row-3"></div>
                </div>
                <div className="about-row">
                    <div className="row-4"></div>
                    <div className="row-5"></div>
                    <div className="row-6"></div>
                </div>
                <div className="about-row">
                    <div className="row-7"></div>
                    <div className="row-8"></div>
                    <div className="row-9"></div>
                </div>
            </div>
        </div>
        <div className="call-to-action">
            <h6>Designing Better Experience</h6>
            <h2>Problems trying to resolve the conflict between </h2>
            <p>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
            <h3>$16.48</h3>
            <button>add your call to action</button>
        </div>
        <Footer />
        </>
    )
}