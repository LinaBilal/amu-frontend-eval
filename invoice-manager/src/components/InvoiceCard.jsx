import { Card, Grid, Typography } from '@mui/material'
import React from 'react'

export default function InvoiceCard({invoice}) {
  return (
  <Card
      id="card"
      square
      sx={{
          maxWidth: 800 ,
          marginTop:'40px',
          padding: 2,
          width: '100%',
          borderBottom : '1px solid black',
          backgroundColor: 'white'

      }}
    >
    <Grid
      container
      alignItems="center"
      spacing={4}
      position="relative"
      justifyContent="space-between"
      wrap="nowrap"
      sx={{
        backgroundColor: 'white'
      }}
    >
    
    <Grid item xs={4} sx={{backgroundColor: 'white'}}>
        <Typography variant="h6" color="text.primary" component="p" sx={{
        backgroundColor: 'white'
      }}>
          {invoice.amount} €
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{backgroundColor: 'white' }}>
        <Typography variant="subtitle1"
                   gutterBottom 
                   component="div" 
                   sx={{ backgroundColor: 'white'}}>
          {invoice.status}
        </Typography>
    </Grid>
  </Grid>
</Card>
  )
}
