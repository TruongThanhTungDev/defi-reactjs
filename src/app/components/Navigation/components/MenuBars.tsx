import { Drawer } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { neutral } from 'themes/neutral';
import Account from './Account';
import LinksBars from './LinksBars';

interface BarsProps {
  open: boolean;
}

export default function MenuBars(props: BarsProps) {
  const { open } = props;
  const isRes = useMediaQuery('(max-width:959px)');

  return (
    <div>
      <Drawer
        sx={{
          marginTop: '100px',
          '& .MuiDrawer-paperAnchorBottom': {
            height: ` ${isRes ? 'calc(100vh - 56px)' : 'calc(100vh - 100px)'}`,
            background: `${neutral.black}`,
            color: '#ffffff',
          },
        }}
        hideBackdrop={true}
        open={open}
        anchor="bottom"
      >
        <Account />
        <LinksBars />
      </Drawer>
    </div>
  );
}
