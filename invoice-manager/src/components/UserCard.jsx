import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserCard({user}) {
  return (
    <Card
      square
      sx={{
          maxWidth:800,
          marginTop:'40px',
          padding: 2,
          width: '100%',
          borderBottom : '1px solid black',
          '&:nth-of-type(even)': {
              borderLeft: '5px solid #4a64ed'
          },
          '&:nth-of-type(odd)': {
              borderLeft: '5px solid rgb(229, 68, 157)'
          },
          backgroundColor: 'white'
      }}>
     <Link to={`/${user.id}`} style={{
                              textDecoration:'none',
                              color:'inherit',  '&:visited': { 
                              color: 'black',
                              textDecoration:'none'}}}>
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
        
          <Grid item xs={4} sx={{
            backgroundColor: 'white'
          }}>
            <Typography variant="h6" color="text.primary" component="p" sx={{
            backgroundColor: 'white',
            textDecoration:'none',
            '&:visited': { 
              color: 'white',
              textDecoration:'none',
          }
          }}>
              {user.fullName} 
            </Typography>
      </Grid>
      <Grid item xs={4} sx={{backgroundColor: 'white'}}>
        <Typography variant="subtitle1" gutterBottom component="div" 
                    sx={{
                    backgroundColor: 'white', 
                    textDecoration:'none',  
                    '&:visited': { 
                      color: 'white',
                      textDecoration:'none',
                      }
                    }}>
          {user.email}
        </Typography>
      </Grid>
    </Grid>
    </Link>
  </Card>
  )
}
