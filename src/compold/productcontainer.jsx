import React from 'react'
import './Product.css'
const Product = () => {
    return (
        <div className='product-container'>
            <div className="product-image">
                <img src="https://apollo.olx.in/v1/files/18rgeire6qzv3-IN/image;s=300x600;q=60" alt="" />
            </div>
            <div className="product-info">
                <h3 className="price">₹ 7500</h3>
                <p className='desc'>Acer Laptop</p>
                <p className='loc-date'>
                    <span className="location">
                        chowk bazar, tezpur
                    </span>
                    <span className="date">
                        today
                    </span>
                </p>
            </div>
        </div>
    )
}


export default Product

