import React from 'react';
import styled from 'styled-components';
import ListExplore from './components/ListExplore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Explore() {
  return (
    <Wrapper>
      <div className="header">Explore Featured Pawnshops</div>
      <ListExplore />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  background-color: var(--primary-bg);
  .header {
    color: var(--secondary-color);
    text-align: center;
    margin: 60px 0 100px 0;
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;

    @media screen and (min-width: 374px) and (max-width: 600px) {
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0em;
      margin: 40px 70px 30px 70px;
    }

    @media screen and (min-width: 1023px) and (max-width: 1300px) {
      font-size: 30px;
      margin: 40px 0 60px 0;
    }
  }
`;
