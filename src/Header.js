import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{cart,user}, dispatch] = useStateValue();

    const handleAuth = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='aamazon' />
            </Link>
            
            <div className="header__nav">
                <LocationOnIcon className=' header__option header__locationIcon' style={{marginRight:'-15px',marginLeft:'-10px'}} />

                <div className="header__option">    
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                    <span span className="header__optionLineTwo">
                        Select your address
                    </span>
                </div>

            </div>
            <Searchbar />

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">
                        Hello, {user? user?.email : 'Guest' }
                        </span>
                        <span className="header__optionLineTwo">
                        {user?'Sign Out':'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <Link to='/checkout'>
                    <ShoppingCartIcon className="header__option" />
                </Link>
                <div className="header__option" style={{marginLeft:'-6px'}}>
                    <span className="header__optionLineTwo header__orderCounts">
                        {cart?.length}
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
