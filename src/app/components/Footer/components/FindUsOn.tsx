import Box from '@mui/material/Box';
import styled from 'styled-components';

// Icon networks
import Git from '../assets/git.svg';
import Tele from '../assets/tele.svg';
import Fb from '../assets/fb.svg';
import Youtube from '../assets/youtube.svg';
import In from '../assets/in.svg';
import Tw from '../assets/tw.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function FindUs() {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box>
      <Title>Find us on</Title>
      {!matches && <img src={Git} alt="This is github" style={{ marginRight: '30px' }} />}
      <img src={Tele} alt="This is Telegram" style={{ marginRight: '30px' }} />
      <img src={Fb} alt="This is Facebook" style={{ marginRight: '30px' }} />
      <img src={Youtube} alt="This is Yotube" style={{ marginRight: '30px' }} />
      <img src={In} alt="This is In" style={{ marginRight: '30px' }} />
      <img src={Tw} alt="This is Twtter" />
    </Box>
  );
}
const Title = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  font-family: Montserrat;
  margin-bottom: 24px;
`;
