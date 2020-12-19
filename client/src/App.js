import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={HomeScreen} exact />
      </Router>
    </div>
  );
}

export default App;
