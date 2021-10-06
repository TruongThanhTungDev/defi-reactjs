import { Button, Checkbox, FormControlLabel, Grid, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormLogin } from './styled';
const LoginForm = () => {
  return (
    <FormLogin>
      <Box component="form" noValidate>
        <Grid className="container-form">
          <span className="title">Email</span>
          <TextField
            color="primary"
            margin="normal"
            required
            fullWidth
            name="email"
            autoComplete="email"
            autoFocus
          />
          <span className="title">Password</span>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            autoComplete="current-password"
          />

          <Grid item className="forgotPass">
            <Link href="#" style={{ color: '#E0E0E0' }}>
              Forgot password?
            </Link>
          </Grid>

          <Grid className="btn">
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} className="btn-sign">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormLogin>
  );
};

export default LoginForm;
