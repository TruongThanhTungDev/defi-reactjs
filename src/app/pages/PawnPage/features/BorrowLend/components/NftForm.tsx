import ButtonField from 'app/components/FormControl/ButtonField';
import React from 'react';
import styled from 'styled-components';
import img from '../assets/Frame.png';

export default function NftForm() {
  return (
    <Wrapper>
      <div className="banner">
        <img src={img} alt="ảnh" />
      </div>
      <div className="btn">
        <ButtonField content="Find NFT lenders" style="goldBtn" sizeBtn="big" />
      </div>

      <p>
        Don’t have hard NFT? <span>Create new</span>
      </p>
      <div className="flag"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .banner {
    width: 227px;
    height: 325px;
    margin: auto;
    margin-top: 57px;
    margin-bottom: 42px;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .btn {
    width: 186px;
    margin: auto;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      width: 100%;
      button {
        line-height: 12px;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
      }
    }
  }

  p {
    text-align: center;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    margin-bottom: 80px;
    margin-top: 32px;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      margin-bottom: 20px;
      margin-top: 24px;
      font-size: 14px;
      line-height: 17px;
    }

    span {
      color: var(--secondary-color);
    }
  }

  .flag {
    width: 100%;
    height: 1px;
  }
`;
