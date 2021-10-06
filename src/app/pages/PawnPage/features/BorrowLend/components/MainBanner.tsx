import React from 'react';
import styled from 'styled-components';
import ContentBanner from './ContentBanner';
import FormMain from './FormMain';

export default function MainBanner() {
  return (
    <Wrapper>
      <ContentBanner />
      <FormMain />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1324px;
  margin: auto;
  display: flex;
  margin-top: 34px;

  @media screen and (min-width: 320px) and (max-width: 600px) {
    width: 100%;
    display: block;
    margin-top: 27px;
  }
`;
