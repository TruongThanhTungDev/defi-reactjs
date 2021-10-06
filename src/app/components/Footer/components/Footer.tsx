import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Contact from './Contact';
import HaNoi from './HaNoi';
import LonDon from './LonDon';
import FindUs from './FindUsOn';
import QuickNav from './QuickNav';
import About from './About';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Image
import ImgText from '../assets/decorator.svg';

export default function FooterUI() {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Container>
      <Grid container width={matches ? '90%' : '70%'}>
        <Grid item xl={3} xs={12}>
          <Contact />
        </Grid>
        <Grid item xl={9} xs={12} container>
          <Grid item xl={7} xs={12}>
            <HaNoi />
            <LonDon />
          </Grid>
          {!matches && (
            <Grid item xl={5} xs={12}>
              <FindUs />
              <QuickNav />
            </Grid>
          )}
        </Grid>
        <Grid item xl={3} xs={12}></Grid>
        <Grid item xl={9} xs={12} container>
          <About />
        </Grid>
        <Grid item xs={12}>
          {matches && (
            <Grid item xl={5} xs={12}>
              <FindUs />
              <QuickNav />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${ImgText});
  background-repeat: no-repeat;
  background-position: 0px 64px;
  background-color: #171a23;
  width: 100%;
  border-top: 1px solid rgba(125, 111, 125, 0.2);
  padding-top: 135px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    background-size: 100%;
    background-position: 0px 30px;
    background-repeat: no-repeat;
    padding-top: 54px;
  }
`;
