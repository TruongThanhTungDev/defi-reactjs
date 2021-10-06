import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';

interface IProps {
  name: string;
  label?: string;
  form: any;
}

function SelectField(props: IProps) {
  const { name, form, label } = props;
  const { control } = form;
  return (
    <Wrapper>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} variant="outlined" fullWidth>
            <MenuItem value={1}>coin 1</MenuItem>
            <MenuItem value={2}>coin 2</MenuItem>
            <MenuItem value={3}>coin 3</MenuItem>
          </Select>
        )}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  border: 2px solid #74767b;
  border-radius: 30px;
  .MuiSelect-select {
    width: 100%;
    padding: 12px;
    color: #fff;
    border-radius: 30px;
  }

  svg {
    color: #fff;
  }
`;

export default SelectField;
