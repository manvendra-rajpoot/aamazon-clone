import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Register from './Register';

function App() {
  const [{},dispatch] = useStateValue();


  //will run once when App component loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER INFO >>>>',authUser);
      if(authUser){
        // the user just logged in/ user was logged in before
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the use is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);


  return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>

            <Route path='/'>
              <Header />
              <Home />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
