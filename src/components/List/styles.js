import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  list: {
    height: '64vh', 
    overflow: 'auto',
    scrollbarColor:' #143050 #dddddd',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#d2d2d2',
    },
    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#143050',
    }
  },
  formControl: {
    margin: theme.spacing(1), 
    minWidth: 120, 
    marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
}));