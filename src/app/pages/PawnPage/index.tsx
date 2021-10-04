import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../../redux/hooks';
import { selectCount } from '../../../redux/slices/counterSlice';
import Explore from './features/Explore';
import More from './features/More';
import Reason from './features/Resson';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export function PawnPage() {
  const count = useAppSelector(selectCount);
  console.log(count);

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
