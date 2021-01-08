import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, image, title, price, rating}) {

    const [{cart}, dispatch] = useStateValue();
    
    const addToCart = () => {
        //dispatch item in data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating,
            },
        })
    }

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

            <button onClick={addToCart}>Add to Cart</button> 
        </div>
    )
}

export default Product;
