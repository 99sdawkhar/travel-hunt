import React from 'react'
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>&copy;2022 by Travel Hunt.</div>
  )
}

export default Footer
