import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import ButtonField from '../../../../../components/FormControl/ButtonField';
import CryptoForm from './CryptoForm';
import NftForm from './NftForm';
import { GeneralForm } from './styled/GeneralStyled';

export default function BorrowForm() {
  const [statusActive, setStatusActive] = useState('left');
  const handleClick = e => {
    setStatusActive(e.target.name);
  };

  const schema = yup.object({
    collateral: yup.string().required('Invalid amount'),
    duration: yup.string().required('Invalid duration'),
    loanAmount: yup.string().required('Invalid amount'),
    collateralSelect: yup.string().required('Invalid'),
    durationSelect: yup.string().required('Invalid'),
    loanSelect: yup.string().required('Invalid'),
  });

  const form = useForm({
    defaultValues: {
      collateral: '',
      duration: '',
      loanAmount: '',
      collateralSelect: '1',
      durationSelect: '2',
      loanSelect: '3',
    },
    resolver: yupResolver(schema),
  });

  return (
    <Wrapper>
      <GeneralForm>
        <div className="flag"></div>
        <div className="listBtn">
          <div className="leftBtn" onClick={handleClick}>
            <ButtonField
              nameBtn="left"
              sizeBtn="big"
              content="Cryptocurrency"
              style={statusActive === 'left' ? 'goldBtn' : ''}
              fontSize="16px"
            />
          </div>
          <div className="rightBtn" onClick={handleClick}>
            <ButtonField
              nameBtn="right"
              sizeBtn="big"
              content="NFT"
              style={statusActive === 'right' ? 'goldBtn' : ''}
              fontSize="16px"
            />
          </div>
        </div>
        {statusActive === 'right' ? <NftForm /> : <CryptoForm form={form} />}
      </GeneralForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .flag {
    width: 100%;
    height: 1px;
  }
  .listBtn {
    display: flex;
    width: 283px;
    margin: auto;
    background-color: #282c37;
    margin-top: 26px;
    border-radius: 30px;
    padding: 5px;
  }
  .leftBtn {
    width: 174px;
  }
  .rightBtn {
    flex: 1;
  }
`;
