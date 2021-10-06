import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';

// Image
import Vn from '../assets/flag.vn.svg';
import Gb from '../assets/flag.gb.svg';

export default function HaNoi() {
  return (
    <Box>
      <Title>DeFi For You — Hanoi Office</Title>
      <Box display="flex" style={{ width: '200px' }}>
        <TextContentYellow>
          <Box component="span" marginRight="15px">
            +84 9643 66605
          </Box>
        </TextContentYellow>
        <img src={Vn} alt="this is flag VietNam" />
      </Box>
      <Box display="flex">
        <TextContentYellow>
          <Box component="span" marginRight="19px">
            +84 9644 41735
          </Box>
        </TextContentYellow>
        <img src={Gb} alt="this is flag English" />
      </Box>
      <TextContent>BT NQ 25-15 Vinhomes Riverside, Long Bien, Hanoi, Vietnam</TextContent>
    </Box>
  );
}
const Title = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  font-family: Montserrat;
  margin-bottom: 24px;
  @media only screen and (min-width: 375px) and (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

const TextContentYellow = styled.p`
  font-family: Montserrat;
  color: #dba83d;
  margin: 0px;
  font-weight: 500;
  margin-bottom: 4px;
  margin-top: 4px;
`;

const TextContent = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
  color: #9fa6b2;
`;
