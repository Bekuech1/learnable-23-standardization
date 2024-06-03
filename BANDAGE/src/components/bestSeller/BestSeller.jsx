import './BestSeller.css'
import React from 'react'

const BestSeller = () => {
  return (
    <div className="sellers-card">
        <img src="images\shop3.jpg" alt="" />
        <div className='sellers-cardtext'>
            <h5>graphic design</h5>
            <a href="http://">English Department</a>
            <h5 className="price">$14.48 <span>$6.48</span></h5>
        </div>
    </div>
  )
}

export default BestSeller