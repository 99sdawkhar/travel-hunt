import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" >
          Travel Hunt
        </Typography>
        <Box display="flex">
          <Typography variant="h6" >
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            <div >
              <div >
                <SearchIcon />
              </div>
              <InputBase placeholder="Search ... " />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
