import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    width: '150px',
    padding: '10px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  typography: {
    fontSize: '16px',
    fontWeight: '600',
  },
  mapContainer: {
    height: '100vh', 
    width: '100%',
  },
  markerContainer: {
    position: 'absolute', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1, 
    '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
  mapImageContainer: {
    width: '100px',
    height: 'auto',
    maxHeight: '100px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 'auto',
    margin: 0,
    padding: 0,
  },
  locationIcon: {
    '&:hover': {
      transform: 'scale(1.5)',
    }
  },
  weatherInfo: {
    position: 'fixed',
    top: '0',
    zIndex: 100,
    transform: 'scale(1.5)',
  }
}));