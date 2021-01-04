import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='aamazon' />

            <div className="header__search">
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello, Sign in
                    </span>
                    <span className="header__optionLineTwo">
                        Account & Lists
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <ShoppingCartIcon className="header__option" />
                <div className="header__optionCart">
                    <span className="header__optionLineTwo header__orderCounts">
                        4
                    </span>
                    <span className="header__optionLineTwo">
                        Cart
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
