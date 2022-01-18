import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: '10px',
  },
  spacing: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  anchor: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cardImage: {
    height: '300px',
    [theme.breakpoints.up('md')]: {
      height: '200px',
    }
  }
}));