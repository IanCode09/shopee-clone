import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={HomeScreen} exact />
          <Route path='/shopee/:id' component={ProductDetailsScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
      </Router>
    </div>
  );
}

export default App;
