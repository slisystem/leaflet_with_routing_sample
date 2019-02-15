import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

//https://github.com/PaulLeCam/react-leaflet/issues/453
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class MapComponent extends Component {
  state = {
    lat: 57.74,
    lng: 11.94,
    zoom: 13,
  }
  road = [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)]
  map = React.createRef();
  defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
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
          road={this.road}
        />
      </Map>
    )
  }
}

export default MapComponent;