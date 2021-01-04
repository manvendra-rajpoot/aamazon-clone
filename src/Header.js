import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='aamazon' />

            <div className="header__nav">
                <LocationOnIcon className=' header__option header__locationIcon' style={{marginRight:'-15px',marginLeft:'-10px'}} />

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                    <span className="header__optionLineTwo">
                        Select your address
                    </span>
                </div>

                <Searchbar />

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
                <div className="header__option" style={{marginLeft:'-6px'}}>
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

const Searchbar = () => {
    return (
        <div className="header__search">
            <input className='header__searchInput' type='text' />
            <SearchIcon className='header__searchIcon' />
        </div>
    )
}

export default Header;