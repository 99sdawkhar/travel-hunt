import { CssBaseline, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react';

import { getPlacesData } from './api';

import Header from './components/Header/Header'
import Map from './components/Map/Map';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    });
    getPlacesData()
      .then((data) => {
        setPlaces(data)
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    getPlacesData(bounds.ne, bounds.sw)
      .then((data) => {
        setPlaces(data)
      })
      .catch((err) => console.log(err));
  }, [coordinates, bounds])

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default App
