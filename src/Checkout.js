import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();
    console.log('ITEM>>>>>',cart);
    
    return (
        <div className='checkout'>
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout" />

            <div className="checkoutPart">
                <div className="checkout__left">
                    <div>
                        <h3 className='checkout__userName'>Hello, {user? user.email :'Guest'}</h3>
                        <h2 className='checkout__title'>Your Shopping Cart</h2>
                        
                        {cart.map((item) => (
                            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                        ))}
                    </div>
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        
        </div>
    )
}

export default Checkout;
