import styled from 'styled-components';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function QuickNav() {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box marginBottom={matches ? '40px' : '0'}>
      <Title style={{ marginBottom: '24px' }}>Quick navigation</Title>
      <TextContent>
        Whitepaper <ArrowForwardIcon style={{ width: '16px' }} />
      </TextContent>
      <TextContent>
        Get the mobile app <ArrowForwardIcon style={{ width: '16px' }} />
      </TextContent>
      <TextContent>
        Buy DFY on Exchanges <ArrowForwardIcon style={{ width: '16px' }} />
      </TextContent>
    </Box>
  );
}
const Title = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  font-family: Montserrat;
  margin: 0px;
  margin-top: 115px;

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    margin-top: 30px;
  }
`;

const TextContent = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
  color: #9fa6b2;
`;
