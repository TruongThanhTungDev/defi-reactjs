import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Image
import Logo from '../assets/logoD.svg';

// Icon
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <>
      <Box display="flex">
        <Box>
          <img src={Logo} alt="this is logoF" />
        </Box>
        <Box
          color="#ffffff"
          paddingLeft="11px"
          position="relative"
          sx={{
            fontFamily: `'Oswald', sans-serif`,
          }}
        >
          <Box fontWeight="bold" fontSize="1.8em">
            DeFi For You
            <Box component="span" color="#ffbf00">
              .
            </Box>
          </Box>

          <Box
            color="#ffbf00"
            fontWeight="300"
            fontSize="18px"
            letterSpacing="0,01rem"
            position="absolute"
            top="35px"
            right="10px"
          >
            defiforyou
            <Box component="span" color="#ffffff">
              .
            </Box>
            uk
          </Box>
        </Box>
      </Box>
      <Box display="flex" marginTop="17px" fontSize="14px" fontWeight="500">
        <Box color="#374151">
          <LanguageIcon sx={{ fontSize: 24 }} />
        </Box>
        <Box marginLeft="12px" color="#9FA6B2" lineHeight="25px" fontFamily="Inter">
          English (United States)
        </Box>
        <Box color="#9FA6B2">
          <ArrowForwardIcon sx={{ fontSize: 18, paddingTop: '5px' }} />
        </Box>
      </Box>
      <Box display="flex" marginTop="17px" fontSize="16px" fontWeight="500">
        <Box color="#374151">
          <MailOutlineIcon sx={{ fontSize: 24 }} />
        </Box>
        <Box
          marginLeft="12px"
          color={matches ? '#ffbf00' : '#9FA6B2'}
          lineHeight="25px"
          fontFamily="Inter"
        >
          ask@defiforyou.uk
        </Box>
      </Box>
      <Box display="flex" marginTop="17px" fontSize="16px" fontWeight="500">
        <Box color="#374151" display={matches ? 'none' : ''}>
          <MailOutlineIcon sx={{ fontSize: 24 }} />
        </Box>
        <Box
          marginLeft="12px"
          color="#9FA6B2"
          lineHeight="25px"
          fontFamily="Inter"
          display={matches ? 'none' : ''}
        >
          support@defiforyou.uk
        </Box>
      </Box>
    </>
  );
};

export default Contact;
