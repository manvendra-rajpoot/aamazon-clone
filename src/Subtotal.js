import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotAmt } from './reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {

    const [{cart}, dispatch] = useStateValue();
    const history = useHistory();

    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <React.Fragment>
                <p>Subtotal ({cart.length} items): <strong>{value}</ strong></p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </React.Fragment>
            )}
            decimalScale={2}
            value={getCartTotAmt(cart)} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"} />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal;
