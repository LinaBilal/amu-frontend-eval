import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadUsersFromApi } from '../api/http';
import UserCard from '../components/UserCard';

export default function UserList() {

    const [state, setState] = useState([]);
  
    useEffect(() => {
     loadUsersFromApi()
        .then((items) => setState(items));  
    }, []);  

  return (
    <>
    <Typography variant="h4" gutterBottom 
                sx={{
                    marginTop:'30px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                    }}>
            Liste des Clients
    </Typography>
    <Grid direction="column" 
          sx={{ 
                justifyContent:'center',
                alignItems:'center',
                display:'flex'
        }}>
        {state.map(user => (
        <UserCard user ={user}/>
        ))}
  </Grid>
  <Link to={'/create'}>
        <Typography variant="h6" 
                    gutterBottom 
                    sx={{
                        mt:'50px',
                        color:'white',
                        ml:'20px',
                        maxWidth:'200px',
                        border:'1px solid black',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        textDecoration:'none',
                        backgroundColor: 'rgb(72, 72, 72)',
                        '&:visited': { 
                            color: 'white',
                            textDecoration:'none'
                          }
                        }}>
              Créer un client
        </Typography>
      
        </Link>
  </>
  )

}
