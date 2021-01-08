import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{user, cart}, dispatch] = useStateValue();
    return (
        <div class='payment'>
            <div className="payment__container">
                <h1><Link to='/checkout' style={{ color: '#0040ff' }}>Checkout ({cart?.length} items)</Link></h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address:</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user? user.email : '<guest>'}</p>
                        <p>Ambedkar Chauraha, Rath</p>
                        <p>Hamirpur, UP, India</p>
                    </div>
                </div>

                <div className="payment__section">
                <div className="payment__title">
                        <h3>Review Items & Delivery:</h3>
                    </div>
                    <div className="payment__items">
                        {cart.map((item) => (
                            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method:</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe */}
                    </div>
                </div>
                
            </div>            
        </div>
    )
}

export default Payment;
