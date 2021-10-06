import styled from 'styled-components';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function About() {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Box marginTop={matches ? '30px' : '56px'}>
      <Title>About DeFi For You.</Title>
      <TextContentYellow>DeFi For You </TextContentYellow>
      <TextContent>
        is a trading style of Miles Mann Limited registered office at 5 Southgate Street,
        Gloucester, Gloucestershire, GL1 1TG1 Licensed authorised and regulated by the Financial
        Conduct Authority to exercise lender's rights and duties under a regulated credit agreement
        (excluding high-cost short-term credit, bill of sale agreement, and home collected credit
        agreement), and has the right to exercise lender's rights and duties under a regulated
        credit agreement (excluding high-cost short-term credit, bill of sale agreement, and home
        collected credit agreement)
      </TextContent>
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

const TextContentYellow = styled.span`
  color: #dba83d;
  margin: 0px;
  font-weight: 500;
  margin-bottom: 4px;
  margin-top: 4px;
  font-family: Inter;
`;

const TextContent = styled.span`
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
  color: #9fa6b2;
  font-family: Inter;
`;
