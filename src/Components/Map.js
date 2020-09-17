import React from 'react';
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3dGVtcGFueSIsImEiOiJja2Y2OXgzNmUwZ2IwMnJvNzhuejhqazN6In0.-18a-5BosFeTxfnvrRJLbg';


class Map extends React.Component {
    state = {
        lng: 5,
        lat: 34,
        zoom: 2
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div className="mapSize">
                <div className="mapContainer" ref={el => this.mapContainer = el} />
            </div>
        );
    }
}

// ReactDOM.render(<Map />, document.getElementById('app'));


export default Map;