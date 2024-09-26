import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import React from 'react'

export const Counter = () => {
    var [a, seta] = useState(0)

    var Add = () => {
        seta(a+1)
    }
    var Sub = () => {
    seta(a-1)
    }
  return (
      <div>
          <Typography variant="h4">{a}</Typography>
          <Button variant="contained" onClick={Add}>+</Button>
          <Button variant="contained" onClick={Sub}>-</Button>
          
    </div>
  );
}
export default Counter