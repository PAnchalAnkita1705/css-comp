import React from 'react'
import './product.css'

const Product = () => {
    return (
        <div className='product'>
            <div className="product-image">
                <img src="{props.image}" alt="" />
            </div>
            <div className="product-info">
                <h3 className="price">₹ {props.price}</h3>
                <p className='desc'>{props.desc}</p>
                <p className='loc-date'>
                    <span className="location">
                        {props.loc}
                    </span>
                    <span className="date">
                        {props.date}
                    </span>
                </p>
            </div>
        </div>
    )
}


export default Product


