import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Tooltip } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import dummyMap from '../../assets/dummy-google-maps-india.jpg';

import useStyles from "./styles";
import useGeoLocation from "../../hooks/useGeoLocation";

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setClickedChild,
  weatherData,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const weatherInfo = weatherData.data;

  const geoLocationStatus = useGeoLocation();

  return (
    <div className={classes.mapContainer}>
      {geoLocationStatus === 'denied' ? (
        <figure className={classes.dummyMap}>
          <img
            src={dummyMap}
            alt="Dummy Google Maps Placeholder"
            loading="lazy"
          />
        </figure>
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          onChange={(e) => {
            setCoordinates({
              lat: e.center.lat,
              lng: e.center.lng,
            });
            setBounds({
              ne: e.marginBounds.ne,
              sw: e.marginBounds.sw,
            });
          }}
          onChildClick={(child) => setClickedChild(child)}
        >
          {places?.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {isDesktop ? (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    gutterBottom
                    variant="subtitle"
                    className={classes.typography}
                  >
                    {place.name}
                  </Typography>
                  <figure className={classes.mapImageContainer}>
                    <img
                      className={classes.img}
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : "https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      }
                      alt={place.name}
                    />
                  </figure>
                  <Rating value={Number(place.rating)} size="small" readOnly />
                </Paper>
              ) : (
                <Tooltip title={place.name}>
                  <LocationOnOutlinedIcon
                    color="primary"
                    fontSize="large"
                    className={classes.locationIcon}
                  />
                </Tooltip>
              )}
            </div>
          ))}
          {weatherInfo && (
            <div
              lat={weatherInfo.coord.lat}
              lng={weatherInfo.coord.lon}
              className={classes.weatherInfo}
            >
              <figure>
                <img
                  src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}
                  alt={weatherInfo.weather[0].main}
                />
              </figure>
            </div>
          )}
        </GoogleMapReact>
      )}
    </div>
  );
};

export default Map;
