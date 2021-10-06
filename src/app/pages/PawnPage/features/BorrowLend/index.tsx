import React from 'react';
import styled from 'styled-components';
import MainBanner from './components/MainBanner';

export default function BorrowLend() {
  return (
    <Wrapper>
      <MainBanner />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--primary-bg);

  .MuiButtonBase-root {
    font-family: 'Montserrat', sans-serif;
  }
`;
