import React from 'react';
import styled from 'styled-components';
import FilterBorrow from './components/FilterBorrow';
import Pagination from '../../components/Pagination/Pagination';
import ResultBorrowComponent from './components/ResultBorrowComponent';

export default function ResultBorrow() {
  return (
    <Wrapper>
      <div className="wrapper">
        <ResultBorrowComponent />
        <FilterBorrow />
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
