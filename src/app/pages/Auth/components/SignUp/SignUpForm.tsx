import { Button, Checkbox, FormControlLabel, Grid, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormSignUp } from './styled';
import InputField from 'app/components/FormControl/InputField';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonField from 'app/components/FormControl/ButtonField';

const SignUpForm = () => {
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
    <FormSignUp>
      <Box component="form" noValidate onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid className="container-form">
          <span className="title">Name</span>
          <InputField name="email" form={form} title="Name" type="text" />
          <span className="title">Email</span>
          <InputField name="email" form={form} title="Email" type="email" />
          <span className="title">Password</span>
          <InputField name="email" form={form} title="Password" type="password" />
          <span className="title">Confirm password</span>
          <InputField name="email" form={form} title="Password" type="password" />
        </Grid>
        <Grid item>
          <p className="detail">
            We will not share or sell your information to 3rd parties.
            <br />
            By clicking on <span className="title-tab">Create Account</span>, you agree to DeFi For
            You's Terms and Conditions of Use.
          </p>
        </Grid>

        <Grid className="btn-create">
          <ButtonField content="Create Account" style="goldBtn" sizeBtn="medium" type="submit" />
        </Grid>
      </Box>
    </FormSignUp>
  );
};
export default SignUpForm;
