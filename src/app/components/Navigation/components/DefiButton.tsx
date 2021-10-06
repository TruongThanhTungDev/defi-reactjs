import React from 'react';
import styled from 'styled-components';
import { gold } from 'themes/gold';

interface ButtonProps {
  content: string;
  isGold?: boolean;
  dnone?: string;
}

export default function DefiButton(props: ButtonProps) {
  const { content, isGold } = props;
  return (
    <Wrapper>
      <div className={isGold ? 'button button-gold' : 'button'}>{content}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 20px;

  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px 20px;

    font-weight: 500;
    font-size: 14px;
    color: ${gold.gold};

    border: 1px solid ${gold.gold};
    border-radius: 50px;

    cursor: pointer;
  }

  .button:hover {
    /* background-color: ${gold.gold}; */
    opacity: 0.8;
  }

  .button-gold {
    color: #282c37;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
  }
`;
