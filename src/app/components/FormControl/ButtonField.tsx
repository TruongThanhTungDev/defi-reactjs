import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

interface IProps {
  content: string;
  style?: 'goldBtn' | 'outlineBtn' | '';
  fontSize?: string;
  sizeBtn?: 'small' | 'medium' | 'big' | '';
  nameBtn?: string;
  type?: string;
  searchIcon?: boolean;
}

function ButtonField(props: IProps) {
  const { content, style, fontSize, sizeBtn, nameBtn, type, searchIcon } = props;
  return (
    <Wrapper
      name={nameBtn}
      fontSize={fontSize}
      className={`${style} ${sizeBtn}`}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {searchIcon ? (
        <>
          <BsSearch />
          <span>{content}</span>
        </>
      ) : (
        content
      )}
    </Wrapper>
  );
}

const Wrapper = styled.button<{
  fontSize?: string;
}>`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  display: block;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-size: ${props => props.fontSize};
  text-align: center;

  &.small {
    padding: 10px 20px;
  }

  &.medium {
    padding: 11px 24px;
  }

  &.big {
    padding: 16px 24px;
  }

  &.goldBtn {
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
    color: #282c37;
  }

  &.outlineBtn {
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
  }

  span {
    margin-left: 18px;
  }

  svg {
    margin-top: -4px;
  }
`;

export default ButtonField;
