import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Card elevation={6}>
      <CardMedia 
        style={{ height: 350 }} 
        image={place.photo ? place.photo.images.medium.url : 'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom varinat="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom varinat="subtitle">out of {place.num_reviews} reviews</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography varinat="subtitle">Price</Typography>
          <Typography gutterBottom varinat="subtitle">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography varinat="subtitle">Ranking</Typography>
          <Typography gutterBottom varinat="subtitle">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box key={award.display_name} my={1} display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography varinat="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} szie="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}><LocationOnIcon /> {place.address} </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}><PhoneIcon /> {place.phone} </Typography>
        )}
        <CardActions>
          <Button size="small" color="#143050" onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="#143050" onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
