import { CssBaseline, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react';

import './index.css'

import { getPlacesData } from './api';

import Header from './components/Header/Header'
import Map from './components/Map/Map';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);

  // location based states
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [clickedChild, setClickedChild] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    });
    getPlacesData()
      .then((data) => {
        setPlaces(data)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    const filterPlaces = places?.filter((place) => place.rating > rating);
    setFilteredPlaces(filterPlaces);
  },[rating])

  useEffect(() => {
    getPlacesData(type, bounds.ne, bounds.sw)
      .then((data) => {
        setPlaces(data)
      })
      .catch((err) => console.log(err));
  }, [type, coordinates, bounds])

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List 
            places={filteredPlaces.length ? filteredPlaces : places}
            clickedChild={clickedChild}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={filteredPlaces.length ? filteredPlaces : places}
            setClickedChild={setClickedChild}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default App
