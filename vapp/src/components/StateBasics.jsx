import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const StateBasics = () => {
  var [fname, setfname] = useState("Vaishnav");
  var [a, seta] = useState();

  const handleinput = (e) => {
    console.log(e.target.value);
    setfname(e.target.value);
  };
  const submitHandler = () => {
    seta(fname);
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h4"> Welcome {a}</Typography>
      <TextField variant="outlined" onChange={handleinput} />
      <br />
      <br />
      <br />
      <Button variant="contained" onClick={submitHandler}>
        Submit
      </Button>
    </div>
  );
};
export default StateBasics