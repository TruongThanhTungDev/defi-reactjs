import React from 'react';
import styled from 'styled-components';
import Avt from '../assets/Vector.svg';

export default function Account() {
  return (
    <Wrapper>
      <img src={Avt} alt="Name" />
      <div>Adman.Chaplin</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding: 17px 0px 15px;
  }
`;
