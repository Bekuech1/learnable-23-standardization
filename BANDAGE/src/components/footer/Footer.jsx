import './Footer.css'

 import React from 'react'
 
 export const Footer = () => {
   return (
     <>
        <div className='footer-top'>
            <h3>Bandage</h3>
            <div className='top-links'>
                <a href=""><img src="icons/facebook.svg" alt="" /></a>
                <a href=""><img src="icons/insta.svg" alt="" /></a>
                <a href=""><img src="icons/twitter.svg" alt="" /></a>
            </div>
        </div>
        <div className='footer-middle'>
            <div className='footer-text1'>
                <h5>Company Info</h5>
                <a href="http://">About Us</a><br />
                <a href="http://">We are hiring</a><br />
                <a href="http://">We are hiring</a><br />
                <a href="http://">Blog</a><br />
            </div>
            <div className='footer-text2'>
                <h5>Legal</h5>
                <a href="http://">About Us</a><br />
                <a href="http://">We are hiring</a><br />
                <a href="http://">We are hiring</a><br />
                <a href="http://">Blog</a><br />
            </div>
            <div className='footer-text1'>
                <h5>Features</h5>
                <a href="http://">Business Marketing</a><br />
                <a href="http://">User Analytic</a><br />
                <a href="http://">Live Chat</a><br />
                <a href="http://">Unlimited Support</a><br />
            </div>
            <div className='footer-text2'>
                <h5>Resources</h5>
                <a href="http://">IOS & Android</a><br />
                <a href="http://">Watch a Demo</a><br />
                <a href="http://">Customers</a><br />
                <a href="http://">API</a><br />
            </div>
            <div className='footer-text3'>
                <h5>Get In Touch</h5>
                <div className='footer-mail'>
                    <input type="email" name="" id="" placeholder='Your Email'/>
                    <button type="submit">Subscribe</button>
                </div>
                <p>Lore imp sum dolor Amit</p>
            </div>           
        </div>
        <div className='grey-background'>
            <div className='footer-bottom'>
                <h6>Made With Love By Finland All Right Reserved</h6>
            </div>
        </div>
     </>
   )
 }
 