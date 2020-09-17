import React from 'react';
import ReactDom from 'react-dom'
import './App.css';
// import mapboxgl from 'mapbox-gl';
import Map from './Components/Map'

// mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3dGVtcGFueSIsImEiOiJja2Y2OXgzNmUwZ2IwMnJvNzhuejhqazN6In0.-18a-5BosFeTxfnvrRJLbg';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          DiveCast.
        </p>
        <div className="mapSize">
          <Map />
        </div>
      </header>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;
