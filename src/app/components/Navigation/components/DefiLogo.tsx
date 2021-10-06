import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/DefiLogo.svg';
import { DefiBreakpoints } from '../DefiBreakpoints';

export default function DefiLogo() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={Logo} alt="Defi for you" />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 0px;
  transition: all 300ms ease-in;
  @media screen and (max-width: ${DefiBreakpoints.md}) {
    padding: 12px 0px 14px;
    img {
      height: 30px;
      transition: all 300ms ease-in;
    }
  }
`;
