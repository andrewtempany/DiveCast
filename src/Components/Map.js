import React from 'react';
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3dGVtcGFueSIsImEiOiJja2Y2OXgzNmUwZ2IwMnJvNzhuejhqazN6In0.-18a-5BosFeTxfnvrRJLbg';


class Map extends React.Component {
    state = {
        lat: "-41.2740",
        lng: "174.7280",
        zoom: "11.11",
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }


    render() {
        return (
            <div className="mapSize">
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        );
    }
}

// ReactDOM.render(<Map />, document.getElementById('app'));


export default Map;