import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logo: {
    margin: '10px 0',
    fontSize: '35px',
    color: '#fff',
    fontWeight: '600',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      margin: '0',
    },
    '& a': {
      color: '#fff',
      letterSpacing: '1px',
      textDecoration: 'none',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { 
      marginLeft: theme.spacing(3), 
      width: 'auto' 
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2), 
    height: '100%', 
    position: 'absolute', 
    pointerEvents: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), 
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, 
    transition: theme.transitions.create('width'), 
    width: '100%', 
    [theme.breakpoints.up('md')]: { 
      width: '20ch' 
    },
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    }
  },
}));