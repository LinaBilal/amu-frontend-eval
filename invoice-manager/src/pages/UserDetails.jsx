import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { loadInvoiceWithUserID, loadOneUserById } from '../api/http';
import InvoiceCard from '../components/InvoiceCard';


export default function UserDetails() {
    const [userDetails, setUserDetails] = useState(null);
    const [invoices, setInvoices] = useState([]);
    const params = useParams();
    const id = +params.id; 

    useEffect(() => {
        loadOneUserById(id)
        .then(users => users[0])
        .then(userByID => setUserDetails(userByID));
        loadInvoiceWithUserID(id).then(invoiceJoinUsers => setInvoices(invoiceJoinUsers));
    }, [id])

    useEffect(() => {
        loadInvoiceWithUserID(id)
            .then(invoiceJoinUsers => setInvoices(invoiceJoinUsers));

    }, [])
  
    return (
    <>
        <Typography variant="h3" gutterBottom sx={{display:'flex', justifyContent:'center', alignItems:'center'}}> Fiche de :  {userDetails?.fullName}</Typography>
        <Typography variant="h6" gutterBottom sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>( {userDetails?.email})</Typography>
        <div>
            <div style={{maxWidth:'280px', maxHeight:'150px'}}>
        <Link to="/">
            <Typography variant="h6" gutterBottom 

                    sx={{
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
                            textDecoration:'none',

                          }

                        }}>
                Retour aux clients
                </Typography>
        </Link>
        </div>
        <Grid direction="column" 
          sx={{ 
                justifyContent:'center',
                alignItems:'center',
                display:'flex'
        }}>
        {invoices.map((invoice)=> (
            <InvoiceCard invoice ={invoice}/>
        ))}
  </Grid>

    <div style={{maxWidth:'280px', maxHeight:'150px'}}>
        <Link to={`/${id}/invoices/add`}>
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
                            textDecoration:'none',
                        }
                        }}>
                 Créer une facture
        </Typography>
    </Link>
    </div>
    </div>
    </>
    )
  
}
