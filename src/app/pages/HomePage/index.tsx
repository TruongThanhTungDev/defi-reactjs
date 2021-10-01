import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../../redux/hooks';
import { selectCount } from '../../../redux/slices/counterSlice';

export function HomePage() {
  const count = useAppSelector(selectCount);
  console.log(count);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
    </>
  );
}
