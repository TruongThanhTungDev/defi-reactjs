import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../../redux/hooks';
import { selectCount } from '../../../redux/slices/counterSlice';
import Explore from './features/Explore';
import More from './features/More';
import Reason from './features/Resson';

export function PawnPage() {
  const count = useAppSelector(selectCount);
  console.log(count);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>Pawn page</span>
      <Reason />
      <Explore />
      <More />
    </>
  );
}
