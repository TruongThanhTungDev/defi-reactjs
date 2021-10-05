import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import BorrowLend from './features/BorrowLend';
import Explore from './features/Explore';
import More from './features/More';
import Reason from './features/Resson';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export function PawnPage() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className={classes.root}>
        <BorrowLend />
        <Reason />
        <Explore />
        <More />
      </div>
    </>
  );
}
