import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { GeneralForm } from './styled/GeneralStyled';
import InputField from 'app/components/FormControl/InputField';
import ButtonField from 'app/components/FormControl/ButtonField';
import SelectField from 'app/components/FormControl/SelectField';
import { Radio } from '@mui/material';
import { orange } from '@mui/material/colors';
import MultipleSelect from 'app/components/FormControl/MultiSelectField';

export default function LendForm() {
  const schema = yup.object({
    maximumLoan: yup.string().required('Maximum loan amount is required'),
    duration: yup.string().required('Invalid duration'),
    collateralSelect: yup.string().required('Invalid'),
    daySelect: yup.string().required('Invalid'),
  });

  const form = useForm({
    defaultValues: {
      maximumLoan: '',
      duration: '',
      collateralSelect: '1',
      daySelect: '2',
    },
    resolver: yupResolver(schema),
  });

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = values => {};

  return (
    <Wrapper>
      <GeneralForm>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flag"></div>
          <div className="wrapper">
            <div className="title">Maximum loan amount</div>
            <div className="inputWrapper">
              <div className="leftInput">
                <InputField form={form} name="maximumLoan" title="Enter amount" />
                <div className="maxBtn">
                  <ButtonField content="Max" style="goldBtn" sizeBtn="small" nameBtn="maxLend" />
                </div>
              </div>

              <div className="rightInput">
                <SelectField name="collateralSelect" form={form} />
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="title">Duration</div>
            <div className="inputWrapper">
              <div className="leftInput">
                <InputField form={form} name="duration" title="Enter amount" />
              </div>

              <div className="rightInput">
                <SelectField name="daySelect" form={form} />
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="title">Collateral</div>
            <div className="checkboxWrapper"></div>
          </div>

          <div className="radioBtns">
            <div className="leftRadio">
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
                sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: orange[300],
                  },
                }}
              />
              <span className={selectedValue === 'a' ? 'activeColor' : ''}>Crypto</span>
            </div>
            <div className="rightRadio">
              <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
                sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: orange[300],
                  },
                }}
              />
              <span className={selectedValue === 'b' ? 'activeColor' : ''}>NFT</span>
            </div>
          </div>
          {selectedValue === 'a' ? (
            <div className="multiSelect">
              <MultipleSelect />
            </div>
          ) : (
            ''
          )}

          <div className="btnSearch">
            <ButtonField
              content="Search"
              style="goldBtn"
              sizeBtn="big"
              nameBtn="search"
              type="submit"
              searchIcon
            />
          </div>
          <div className="flag"></div>
        </form>
      </GeneralForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .wrapper {
    margin-top: 20px;
  }
  .inputWrapper {
    display: flex;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      margin-top: 6px;
    }

    .leftInput {
      position: relative;
      width: 417px;
      margin-right: 12px;

      .MuiFormControl-root {
        @media screen and (min-width: 320px) and (max-width: 600px) {
          margin-bottom: 0;
        }
      }

      .maxBtn {
        width: 66px;
        position: absolute;
        top: 22px;
        right: 6px;

        @media screen and (min-width: 320px) and (max-width: 600px) {
          top: 5px;
          right: 5px;
          width: 56px;
        }

        button {
          @media screen and (min-width: 320px) and (max-width: 600px) {
            font-size: 14px;
            font-weight: 400;
            line-height: 12px;
          }
        }
      }
    }

    .rightInput {
      padding-top: 6px;
      flex: 1;

      fieldset {
        border: none;
      }
    }
  }

  .title {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
    }
  }

  .flag {
    width: 100%;
    height: 1px;
  }

  .btnSearch {
    button {
      margin-bottom: 150px;
      margin-top: 50px;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;

      @media screen and (min-width: 320px) and (max-width: 600px) {
        padding: 12px 20px;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 24px;
        margin-top: 40px;
      }
    }
  }

  .radioBtns {
    display: flex;
    color: #fff;

    .activeColor {
      color: #dba83d;
    }

    .leftRadio {
      width: 50%;
    }

    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
    }
  }

  .multiSelect {
    margin-top: 10px;

    .MuiChip-root {
      background-color: #2e3139;
    }

    .MuiSelect-select {
      padding: 6px 12px;
    }
  }

  .MuiList-root.MuiList-padding.MuiMenu-list.css-6hp17o-MuiList-root-MuiMenu-list {
    background-color: red;
  }
`;
