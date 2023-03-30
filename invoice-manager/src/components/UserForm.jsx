import { Grid } from '@mui/material'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { addUserFromAPI } from '../api/http';

export default function UserForm() {
    const [userValues, setUserValues] = useState({
        fullName: "",
        email: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        addUserFromAPI(userValues)
        .then(() => {
            setUserValues(userValues);
            navigate('/')
        })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserValues({ ...userValues, [name]: value });
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop:'140px', marginLeft:'auto', marginRight:'auto', width:'300px' }}>
                <Grid gap={10}>
                    <label style={{ fontWeight:'bold', marginRight:'10px' }}>FullName</label>
                    <input
                        type="text"
                        name="fullName"
                        onChange={handleInputChange}
                        value={userValues.fullName}
                        required
                        style={{ width:'100%', height:'30px', border:'3px solid rgb(229, 68, 157)' }}
                    />
                </Grid>
                <Grid gap={10}>
                    <label style={{ fontWeight:'bold', marginRight:'10px' }}>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={userValues.email}
                        onChange={handleInputChange}
                        required
                        style={{ width:'100%', height:'30px', border:'3px solid rgb(229, 68, 157)' }}
                    />
                </Grid>
                <button 
                name='Enregistrer'
                    type="submit" 
                    variant="contained" 
                    style={{ width:'100%', height:'30px', backgroundColor:'#4a64ed', color:'white', marginTop:'20px' }}
                >
                    Enregistrer
                </button>
            </form>
        </>
    )
}
