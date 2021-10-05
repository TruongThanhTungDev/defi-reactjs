import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Image
import Gb from '../assets/flag.gb.svg';

// Icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LonDon() {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box marginTop={matches ? '30px' : '56px'}>
      <Title>DeFi For You — London Office</Title>
      <Box display={matches ? 'block' : 'flex'}>
        <TextContentYellow>
          <Box component="span" marginRight="15px">
            +84 9643 66605
          </Box>
          <img src={Gb} alt="this is flag English" />
        </TextContentYellow>
        <TextContentYellow>
          <Box component="span" marginLeft={matches ? '0' : '15px'}>
            Sean Mason - CFO
          </Box>
        </TextContentYellow>
      </Box>
      <TextContent>Office 32 19-21 Crawford Street, London, United Kingdom, W1H 1PJ</TextContent>
      <TextContent>Registration Number: 13126050</TextContent>
      <TextContentYellow>
        View on Companies House <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </TextContentYellow>
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
