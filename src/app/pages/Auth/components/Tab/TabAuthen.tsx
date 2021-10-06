import { Grid } from '@mui/material';
import React from 'react';
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../SignUp/SignUpForm';
import BigLogo from '../../assets/Frame.svg';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FormTabAuth } from './styled';

const TabAuthen = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <FormTabAuth>
      <Grid>
        <h3>
          Exclusive on <span className="title-tab">DeFi For You</span>
          <span className="mark">!!!</span>
        </h3>
        <p>
          Register new DeFi For You account from <span className="title-tab">01/08/2021</span> to{' '}
          <span className="title-tab">31/12/2021</span> to
          <br />
          have 100% chance of receiving DFY tokens
        </p>
      </Grid>
      <Grid container className="container-tab">
        <Grid item md={6} className="form">
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab className="btn-tab" label="Sign up" value="1" />
                <Tab className="btn-tab" label="Log in" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <SignUpForm />
            </TabPanel>
            <TabPanel value="2">
              <LoginForm />
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid md={6}>
          <img src={BigLogo} alt="BigLogo" />
        </Grid>
      </Grid>
    </FormTabAuth>
  );
};

export default TabAuthen;
