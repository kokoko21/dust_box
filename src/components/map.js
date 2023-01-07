import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));
export default function SimpleExample() {
  const state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };

  // render() {
    const classes = useStyles();
    const position = [state.lat, state.lng]
    return (
      <Grid container>
        <Grid item xs={12}>
          <MapContainer center={position} zoom={state.zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http:/>/osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
    );
}