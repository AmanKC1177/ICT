import React from 'react'
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <h1>Login page</h1>
      <TextField variant="outlined" label="name" /> <br />
      <br />
      <TextField variant="outlined" label="email" /> <br />
      <br />
      <TextField variant="outlined" label="phone" /> <br />
      <br />
      <Button variant="contained">Submit</Button> <br />
      <br />
    </div>
  );
}

export default Login