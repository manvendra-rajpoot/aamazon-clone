import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Register.css';

function Register() {
    const [email,setEmail]  = useState('');
    const [password,setPassword]  = useState('');
    const history = useHistory();

    const register = (e) => {
        e.preventDefault();// to prevent REFRESH
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }
    
    return (
        <div className='register'>
            <Link to='/'>
                <img className='register__logo' src='https://www.marketplace.org/wp-content/uploads/2019/07/Amazon-ring.png' alt='aamazonlogo' />
            </Link>
            <div className="register__container">
                <h2>Create Account</h2>
                <form>
                    <h6>Your Name</h6>
                    <input type='text' />
                    <h6>Mobile Number</h6>
                    <div className="mobNumber">
                        <input className='countryCode' type="text" placeholder=' + 91' />
                        <input className='tenDigits'type="text"  />
                    </div>
                    
                    <h6>Email</h6>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h6>Password</h6>
                    <input type='password'value={password} onChange={e => setPassword(e.target.value)} />

                    <button  onClick={register} type='submit' >Continue</button>
                </form>
            </div>
            <p>Already have an account? &nbsp;
                <Link to='/login'> Sign in-{'>'} </Link>
            </p>
            
        </div>
    )
}

export default Register;
