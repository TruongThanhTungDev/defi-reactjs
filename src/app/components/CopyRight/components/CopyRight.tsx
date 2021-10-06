import Box from '@mui/material/Box';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CopyRightUI() {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('md'));
  return (
    <Container>
      <Grid container width={matches ? '100%' : '70%'}>
        <Grid item xl={6} xs={12} md={6} textAlign={matches ? 'center' : 'left'}>
          <Box component="span">© 2021 DeFi For You. All rights reserved.</Box>
        </Grid>
        <Grid item xl={6} xs={12} md={6} textAlign={matches ? 'center' : 'right'}>
          <Box textAlign="right" component="span">
            <Box component="span">Terms of Service </Box>
            <Box component="span"> | </Box>
            <Box component="span"> Privacy Policy</Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
const Container = styled.div`
  background-color: #13171f;
  width: 100%;
  color: #74767b;
  display: flex;
  justify-content: center;
  padding-top: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;
