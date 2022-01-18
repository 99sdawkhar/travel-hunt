import React from 'react'
import { Typography } from '@material-ui/core'

const Error = ({children}) => {
  return (
    <Typography gutterBottom variant="h5">{children}</Typography>
  )
}

export default Error
