import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  
    let [email,setemail]=useState()
    let [pwd,setpwd]=useState()
   

    const navigate = useNavigate();

    let handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3010/login',{email,pwd})
      .then(res=>console.log(res))
      .catch(err=>console.log(err))


}

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={e=>setemail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e=>setpwd(e.target.value)}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login 
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
