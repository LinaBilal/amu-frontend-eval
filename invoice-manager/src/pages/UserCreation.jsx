import { Grid, Typography } from '@mui/material'
import React from 'react'
import UserForm from '../components/UserForm'

export default function UserCreation() {
  return (
    <Grid>
      <Typography variant="h4" gutterBottom  sx={{marginTop:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>Add a new Client</Typography>
        <Grid direction="column" 
          sx={{ 
                justifyContent:'center',
                alignItems:'center',
                display:'flex',
        }}>
           <UserForm/>
      </Grid>
    </Grid>
  )
}
