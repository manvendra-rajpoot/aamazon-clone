import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [email,setEmail]  = useState('');
    const [password,setPassword]  = useState('');
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();// to prevent REFRESH
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://www.marketplace.org/wp-content/uploads/2019/07/Amazon-ring.png' alt='aamazonlogo' />
            </Link>
            
            <div className="login__container">
                <h2>Login</h2>
                <form>
                    <h6>Email</h6>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h6>Password</h6>
                    <input type='password'value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login__signInButton' onClick={signIn} type='submit' >Sign In</button>
                    </form>

                    <p>By continuing, you agree to Aamazon's <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">Conditions of Use</a> and <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">Privacy Notice</a>.
                    </p>
            </div>

            <p>-------------------------- New to Amazon? -------------------------</p>
            <button className='login__registerButton' onClick={e => history.push('/register')} >Create your Amazon account</button>
        </div>
    )
}

export default Login;
