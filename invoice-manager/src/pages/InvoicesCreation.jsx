import { Grid, Typography } from '@mui/material'
import React from 'react'
import InvoiceForm from '../components/InvoiceForm'

export default function InvoicesCreation() {
  return (
  
  <>  <Typography variant="h4" gutterBottom 
  sx={{
      marginTop:'30px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
      }}>
        Add a new Invoice
</Typography>
<Grid direction="column" 
      sx={{ 
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
        }}>
          <InvoiceForm />
  </Grid>
    </>
  )
}
