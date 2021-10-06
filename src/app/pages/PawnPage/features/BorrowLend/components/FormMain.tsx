import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import BorrowForm from './BorrowForm';
import LendForm from './LendForm';
import styled from 'styled-components';

export default function FormMain() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange}>
              <Tab label="Borrow" value="1" />
              <Tab label="Lend" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BorrowForm />
          </TabPanel>
          <TabPanel value="2">
            <LendForm />
          </TabPanel>
        </TabContext>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 80px;

  @media screen and (min-width: 320px) and (max-width: 600px) {
    margin-left: 0;
    font-size: 14px;
    margin-bottom: 20px;
    margin-top: 32px;
  }

  .MuiTabPanel-root {
    padding: 0 24px;
  }

  .MuiTab-textColorPrimary {
    color: var(--primary-color);
    text-transform: capitalize;
  }

  margin-top: 50px;
  .MuiTabs-indicator {
    display: none;
  }

  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: var(--secondary-color);
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    text-transform: capitalize;
  }
`;
