import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";


function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <React.Fragment>
                <p>Subtotal ({0} items): <strong>{value}</ strong></p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </React.Fragment>
            )}
            decimalScale={2}
            value={0} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"} />

            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal;
