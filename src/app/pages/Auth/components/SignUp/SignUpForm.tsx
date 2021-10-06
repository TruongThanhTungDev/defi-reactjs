import { Button, Checkbox, FormControlLabel, Grid, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormSignUp } from './styled';
const SignUpForm = () => {
  return (
    <FormSignUp>
      <Box component="form" noValidate>
        <Grid className="container-form">
          <span className="title">Name</span>
          <TextField margin="normal" required fullWidth name="email" autoComplete="email" />
          <span className="title">Email</span>
          <TextField margin="normal" required fullWidth name="email" autoComplete="email" />
          <span className="title">Password</span>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <span className="ti tle">Confirm password</span>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item>
          <p className="detail">
            We will not share or sell your information to 3rd parties.
            <br />
            By clicking on <span className="title-tab">Create Account</span>, you agree to DeFi For
            You's Terms and Conditions of Use.
          </p>
        </Grid>
        <Grid className="btn">
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} className="btn-sign">
            Create Account
          </Button>
        </Grid>
      </Box>
    </FormSignUp>
  );
};
export default SignUpForm;
