import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Vaap</Typography>
          <Link to="/">
            <Button variant="contained">Login</Button>
          </Link>
          <Link to="/s">
            <Button variant="contained">Signup</Button>
          </Link>
          <Link to="/n">
            <Button variant="contained">State</Button>
          </Link>
          <Link to="/c">
            <Button variant="contained">Counter</Button>
          </Link>
          <Link to="/v">
            <Button variant="contained">Api</Button>
          </Link>
          <Link to="/x">
            <Button variant="contained">Pokemon</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default Navbar