import React from 'react';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

interface IProps {
  name: string;
  title: string;
  form: any;
  type?: string;
}

function InputField(props: IProps) {
  const { name, title, form, type } = props;
  const { control } = form;
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];
  return (
    <Wrapper hasErr={Boolean(hasError)}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            fullWidth
            placeholder={title}
            error={Boolean(hasError)}
            helperText={hasError?.message}
            margin="normal"
            type={type}
          />
        )}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ hasErr?: any }>`
  position: relative;
  .MuiInputBase-root {
    border-radius: 30px;
    border: 2px solid ${props => (props.hasErr ? '#ff5252' : '#74767B')};
  }

  .MuiFormControl-root {
    @media screen and (min-width: 320px) and (max-width: 600px) {
      margin-top: 0;
    }
  }

  input {
    color: #fff;
    outline: none;
    padding: 10px 18px;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      padding: 8px 16px;
    }
  }

  fieldset {
    border: none;
  }

  .MuiFormHelperText-root.Mui-error {
    position: absolute;
    bottom: -20px;
    color: #ff5252;
    font-size: 12px;

    animation: errorText 0.3s ease;
  }

  @keyframes errorText {
    from {
      transform: translateY(-5px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export default InputField;
