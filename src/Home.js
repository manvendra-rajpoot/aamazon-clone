import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/1499/GW/Hero/MSO/ENG/HIN/Updated/Header_1500x600._CB412497578_.jpg' 
                alt='home banner'/>

                <div className="home__row">
                    <Product id='11175' image='https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Accessories/Cloud_Core_7.1Cloud_Core_7.1_-Just_launched.jpg' title='HyperX Cloud Core + 7.1 Gaming Headset for PC, PS4, Xbox One, Nintendo Switch, and Mobile Devices (HX-HSCC-2-BK/WW)' price={87.99} rating={5} />
                    
                    <Product id='11188' image='https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY327_FMwebp_QL65_.jpg' title='OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)' price={821.99} rating={4} />
                    
                    <Product id='11155' image='https://m.media-amazon.com/images/I/615rQh7ZZ2L._AC_UY327_FMwebp_QL65_.jpg' title='Gentoo LCD Tablet 8.5 inch E-Ruff pad eletcronic Writing Tablet/pad for Kids/Adults (Multi Color -Pink, Blue..)' price={8.99} rating={3} />
                    
                </div>

                <div className="home__row">
                    <Product id='22215'image='https://images-eu.ssl-images-amazon.com/images/I/71frknp-CWL._AC_UL200_SR200,200_.jpg' title='World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set by Dale Carnegie' price={4.09} rating={4} />
                    
                    <Product id='22209'image='https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg'title='Ikigai: The Japanese secret to a long and happy life ' price={5.01} rating={4} />

                    <Product id='22277'image='https://images-eu.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL200_SR200,200_.jpg'title='Attitude Is Everything: Change Your Attitude, Change Your Life! by Keller Jeff' price={5.29} rating={3} />
                    
                    <Product  id='22299' image='https://images-eu.ssl-images-amazon.com/images/I/41p1cRZGtaL._AC_SX184_.jpg' title='Cracking the Coding Interview (Indian Edition)' price={4.99} rating={5} />
                    
                    <Product id='22221' image='https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SY344_BO1,204,203,200_.jpg'title='Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! ' price={5.39} rating={4} />
                </div>

                <div className="home__row">
                    <Product id='33310' image='https://m.media-amazon.com/images/I/51KHZk6CIwL.jpg' title='Mi TV 4X 138.8 cm (55 Inches) Ultra HD Android LED TV (Black)' price={684.99} rating={4} />
                
                    <Product id='33307' image='https://m.media-amazon.com/images/I/51+7eXVV9dL.jpg' title='LG 108 cm (43 inches) Full HD LED Smart TV 43LM5650PTA (Ceramic Black) (2020 Model)' price={397.29} rating={4} />

                    
                </div>

                <div className="home__row">
                    <Product id='44474' image='https://images-eu.ssl-images-amazon.com/images/I/31ZDzoEEhyL._AC_SX184_.jpg' title='IFB 7 Kg 5 Star Fully-Automatic Front Loading Washing Machine (Neo Diva VX 7 kg, White, Inbuilt Heater)' price={49.19} rating={4} />

                    <Product id='44450' image='https://images-eu.ssl-images-amazon.com/images/I/31KnkWXJz5L._AC_SX184_.jpg' title='Whirlpool 240 L Frost-Free Multi-Door Refrigerator (German Steel)' price={60.09} rating={4} />

                    <Product id='44412' image='https://m.media-amazon.com/images/I/51Kmdh7G7+L.jpg' title='Bajaj 17 Litres Solo Microwave Oven with Mechanical Knob (1701 MT, White)' price={17.79} rating={3} />

                    <Product id='44400' image='https://m.media-amazon.com/images/I/51w09s2KgnL.jpg' title='Onsitego 1 Year Extended Warranty for Small Appliances up to Rs 5000 (Email Delivery - No Physical Kit)' price={26.19} rating={4} />
                </div>

                <div className="home__row">
                    <Product id='55511' image='https://m.media-amazon.com/images/I/61k+sjmUURL._AC_UL480_FMwebp_QL65_.jpg' title='Furny MultiStyle 7 Seater L-Shape Sofa - RHS (3 Seater + 2 Seater + 2 Puffy) Combo (Beige-Brown)' price={297.29} rating={4} />
                    <Product id='55587' image='https://m.media-amazon.com/images/I/81yi5l+U4LL._AC_UL480_FMwebp_QL65_.jpg' title='SofaArchitect (3 Years Warranty) Chilly 5 Seater 3+2 Fabric Sofa Set (Blue)' price={409.59} rating={4} />
                    <Product id='55501' image='https://m.media-amazon.com/images/I/41bcNmLsB3L._AC_SR160,160_.jpg' title='MISURAA Imported Xenon Mid Back Ergonomic Chair for Office & Home' price={23.59} rating={5} />
                </div>

                

            </div>            
        </div>
    )
}

export default Home;
