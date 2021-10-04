import { Grid } from '@mui/material';
import React from 'react';
import Group from '../assets/group.svg';
import FastTime from '../assets/fastTime.svg';
import Approved from '../assets/approved.svg';
import Rate from '../assets/rate.svg';
import styled from 'styled-components';

const data = [
  {
    icon: FastTime,
    title: 'Quicker Than The Bank',
    desc: 'Banks are yesterdays news. Get the money you need without having to wait.',
  },
  {
    icon: Rate,
    title: 'Better Interest Rates',
    desc: 'P2P lending lets you negotiate with the lender to arrange the best possible interest rates.',
  },
  {
    icon: Group,
    title: 'Finance Assets Without Selling',
    desc: ' Put your assets to work so you can continue to meet your financial obligations.',
  },
  {
    icon: Approved,
    title: 'No Credit Checks',
    desc: 'Borrow without the background checks. Anyone can get the financing they need.',
  },
];
const RessonItem = () => {
  return (
    <Wrapper>
      <Grid container className="container">
        {data.map((item, index) => {
          return (
            <Grid
              item
              md={3}
              key={index}
              className={`${index % 2 === 0 ? 'containerMobile' : 'containerMobileR'}`}
            >
              <img src={item.icon} alt="Logo" />
              <div className="titleMobile">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
};

export default RessonItem;

const Wrapper = styled.div`
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
  h4 {
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 34px;
  }
  @media (min-width: 374px) and (max-width: 480px) {
    .titleMobile {
      padding: 0 30px;
    }
    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 8px;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
    }
    .containerMobile {
      display: flex;
      flex-direction: row;
      text-align: left;
    }
    .containerMobileR {
      display: flex;
      flex-direction: row-reverse;
      text-align: right;
    }
  }
`;
