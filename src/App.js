import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser)
      if (authUser) {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
