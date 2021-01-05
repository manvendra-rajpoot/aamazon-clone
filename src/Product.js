import React from 'react';
import './Product.css';

function Product({image, title, price, rating}) {
    return (
        <div className='product'>
            <img src={image} alt='productImage' />
            
            <div className="product__info">
                <p className="product__title">
                    {title}
                </p>
                <p className="product__price">
                    <strong>${price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
                </div>
            </div>

            <button>Add to Cart</button> 
        </div>
    )
}

export default Product;
