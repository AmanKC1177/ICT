import { Button, TextField } from '@mui/material'
import React from 'react'


export const Signup = () => {
  return (
      <div>
          <h1>Sign up </h1>
      <TextField id="outlined" label="Name" /> <br /><br />
      <TextField id="outlined" label="Age" /> <br /><br />
      <TextField id="outlined" label="Phone" /> <br /><br />
      <Button variant="contained">Submit</Button> 
    </div>
  );
}
