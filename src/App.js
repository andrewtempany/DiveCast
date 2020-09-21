import React from 'react';
import ReactDom from 'react-dom'
import './App.css';
// import mapboxgl from 'mapbox-gl';
import Map from './Components/Map'
import { Route, HashRouter, Link } from 'react-router-dom'
import { Button } from "@chakra-ui/core";


// mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3dGVtcGFueSIsImEiOiJja2Y2OXgzNmUwZ2IwMnJvNzhuejhqazN6In0.-18a-5BosFeTxfnvrRJLbg';

function App() {


  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <h1>
            DiveCast.
        </h1>
          <Link to="/map" textDecoration="none">
            <Button textDecoration="none" variantColor="teal" variant="outline">
              Button
            </Button>
          </Link>
        </header>
        <Route path='/map' component={Map} />
      </div>
    </HashRouter>
  );
}

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;
