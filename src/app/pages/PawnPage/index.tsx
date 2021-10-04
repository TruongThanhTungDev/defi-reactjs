import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <span>Pawn page</span>
      <div className={classes.root}>
        <Reason />
        <Explore />
        <More />
      </div>
    </>
  );
}
