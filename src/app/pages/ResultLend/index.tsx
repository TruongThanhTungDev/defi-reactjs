import React from 'react';
import styled from 'styled-components';
import FilterLend from './components/FilterLend';
import Pagination from '../../components/Pagination/Pagination';
import ResultLendComponent from './components/ResultLendComponent';

export default function ResultBorrow() {
  return (
    <Wrapper>
      <div className="wrapper">
        <ResultLendComponent />
        <FilterLend />
      </div>
      {/*  */}
      <Pagination />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
