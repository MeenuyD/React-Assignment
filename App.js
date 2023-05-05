import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;