import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={HomeScreen} exact />
          <Route path='/shopee/:id' component={ProductDetailsScreen} />
      </Router>
    </div>
  );
}

export default App;
