import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addInvoiceFromAPI } from '../api/http';

export default function InvoiceForm() {
    const [formValues, setFormValues] = useState({
        amount: "",
        status: "Envoyée",
      });
      const navigate = useNavigate();

      const { idUser } = useParams();
    const handleSubmit = (event) => {
        event.preventDefault();
        addInvoiceFromAPI({ ...formValues,idUser })
        .then(() => {
            setFormValues(formValues);
            navigate('/'+idUser)
        })
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };

  return (
    <>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '50px',marginTop:'140px',marginLeft:'80px' }}>
      <Grid >
            <label style={{fontWeight:'bold'}}>Montant de la facture </label>
         <input
            type="number"
            name="amount"
            onChange={handleInputChange}
            value={formValues.amount}
            required
            style={{width:'320px',height:'35px', border:'3px solid  rgb(229, 68, 157)', marginLeft:'20px'}}
        />
      </Grid>
      <Grid >
            <label style={{fontWeight:'bold'}}>Status de la facture </label>
            <select
              name="status"
              value={formValues.status}
              onChange={handleInputChange}
              required
              style={{
                width: '330px',
                height: '40px',
                border: '3px solid rgb(229, 68, 157)',
                marginLeft: '35px',
                overflow: 'auto',
              }}
>
              <option value="Envoyée">Envoyée</option>
              <option value="Payée">Payée</option>
            </select>
      </Grid>

      
      <button type="submit" 
                variant="contained" 
                style={{marginLeft:'400px',width:'150px', height:'36px',backgroundColor: '#4a64ed',color:'white'}}>
        Enregistrer la facture
      </button>
    </form>
    </>
  )
}
