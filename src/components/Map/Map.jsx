import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import useStyles from './styles'

const Map = ({ coordinates, setCoordinates, setBounds}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC_ChASrTuzS5gJOXnUsoHokC5Lh5GgCrQ' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e) => {
          setCoordinates({
            lat: e.center.lat,
            lng: e.center.lng
          })
          setBounds({
            ne: e.bounds.ne,
            sw: e.bounds.sw,
          })
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map
