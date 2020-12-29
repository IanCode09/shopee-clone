import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen/CartScreen'
import CheckoutAddressScreen from './screens/CheckoutAddressScreen/CheckoutAddressScreen'
import CheckoutScreen from './screens/CheckoutScreen/CheckoutScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import PayScreen from './screens/PayScreen/PayScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={HomeScreen} exact />
          <Route path='/shopee/:id' component={ProductDetailsScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/checkout/address' component={CheckoutAddressScreen} />
          <Route path='/checkout/state' component={CheckoutScreen} />
          <Route path='/checkout/pay' component={PayScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          
      </Router>
    </div>
  );
}

export default App;
