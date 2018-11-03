import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
import '../node_modules/leaflet/dist/leaflet.css';

class MapComponent extends Component {
  state = {
    lat: 57.74,
    lng: 11.94,
    zoom: 13,
  }
  
  constructor() {
    super();

    this.map = React.createRef();
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} ref={this.map}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RoutingMachine
          color="#000"
          map={this.map}
        />
      </Map>
    )
  }
}

export default MapComponent;