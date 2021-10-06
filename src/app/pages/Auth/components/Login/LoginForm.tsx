import { Button, Checkbox, FormControlLabel, Grid, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import InputField from 'app/components/FormControl/InputField';
import React from 'react';
import { FormLogin } from './styled';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonField from 'app/components/FormControl/ButtonField';

const LoginForm = () => {
  const schema = yup.object({
    password: yup.string().required(),
    email: yup.string().required(),
  });

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmit = value => {
    console.log(value);
  };
  return (
    <FormLogin>
      <Box component="form" noValidate onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid className="container-form">
          <span className="title">Email</span>
          <InputField name="email" form={form} title="Email" type="email" />
          <span className="title">Password</span>
          <div className="inputWrapper">
            <InputField name="password" form={form} title="Password" type="password" />
          </div>
          <Grid item className="forgotPass">
            <Link href="#" style={{ color: '#E0E0E0' }}>
              Forgot password?
            </Link>
          </Grid>
          <Grid className="btn-sign">
            <ButtonField content="Sign In" style="goldBtn" sizeBtn="medium" type="submit" />
          </Grid>
        </Grid>
      </Box>
    </FormLogin>
  );
};

export default LoginForm;
