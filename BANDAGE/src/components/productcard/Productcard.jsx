import React from 'react'
import './Productcard.css'

const Productcard = () => {
  return (
                <div className="product-card">
                        <img src="images\shop3.jpg" alt="" />
                    <div className='product-cardtext'>
                        <h5>graphic design</h5>
                        <a href="http://">English Department</a>
                        <h5 className="price">$14.48 <span>$6.48</span></h5>
                    </div>
                </div>
  )
}

export default Productcard