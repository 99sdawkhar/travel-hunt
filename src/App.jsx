import { CssBaseline, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react';

import './index.css'

import { getCurrentWeather, getPlacesData } from './api';

import Header from './components/Header/Header'
import Map from './components/Map/Map';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([])
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
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    const filterPlaces = places?.filter((place) => place.rating > rating);
    setFilteredPlaces(filterPlaces);
  },[rating])

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      setIsLoading(true);
      getCurrentWeather(coordinates.lat, coordinates.lng)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => console.log(err));

      getPlacesData(type, bounds.ne, bounds.sw)
      .then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
        setFilteredPlaces([]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    }
  }, [type, bounds])

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%', marginTop:"10px" }}>
        <Grid item xs={12} md={4}>
          <List 
            places={filteredPlaces.length > 0 ? filteredPlaces : places}
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
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default App
