import React from 'react';
import styled from 'styled-components';
import image from '../assets/bannerImg.png';
import Typewriter from 'typewriter-effect';

export default function ContentBanner() {
  return (
    <Wrapper>
      <h2>
        <Typewriter
          options={{
            strings: ['Hello', 'World'],
            autoStart: true,
            loop: true,
            cursor: ' ',
          }}
        />{' '}
        with <span>DeFi For You.</span>
      </h2>
      <p>Get Crypto Loans Instantly, Regardless of Your Credit Rating</p>

      <img src={image} alt="ảnh banner" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--primary-color);

  h2 {
    font-size: 60px;
    font-weight: 700;
    line-height: 73px;
    letter-spacing: 0em;
    width: 628px;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      font-size: 36px;
      line-height: 44px;
      width: 100%;
      padding: 0 18px;
      margin: 10px 0;
    }

    div {
      display: inline;
    }

    & span {
      color: var(--secondary-color);
    }
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      font-size: 14px;
      line-height: 17px;
      width: 85%;
      margin: auto;
    }
  }

  img {
    margin-top: 60px;
    width: 668px;
    height: 416px;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      width: 344px;
      max-width: 100%;
      height: 214px;
      margin-top: 14px;
    }
  }
`;
