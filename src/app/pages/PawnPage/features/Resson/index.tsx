import { InjectSagaParams } from './../../../../../utils/types/injector-typings';
import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import RessonItem from './components/RessonItem';
const Reason = () => {
  return (
    <Wrapper className="container">
      <Grid>
        <h3>Why Borrow With Us?</h3>
        <div>
          <RessonItem />
        </div>
      </Grid>
    </Wrapper>
  );
};

export default Reason;

const Wrapper = styled.div`
  padding: 60px 320px 80px 320px;
  width: 100%;
  text-align: center;
  background: #171a23;
  color: #ffffff;
  h3 {
    color: #dba83d;
    font-weight: 600px;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 100px;
    margin-top: 0;
  }
  @media (min-width: 374px) and (max-width: 480px) {
    padding: 40px 16px 50px 16px;
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 40px;
    }
  }
  @media (min-width: 1440px) and (max-width: 1919px) {
    padding: 40px 26px 50px 26px;
  }
`;
