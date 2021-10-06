import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import { gold } from 'themes/gold';

const links = [
  { name: 'Pawn', path: '/pawn', active: true },
  { name: 'Borrow', path: '/borrow', active: false },
  { name: 'Lend', path: '/lend', active: false },
  { name: 'NFT', path: '/nft', active: false },
  { name: 'My account', path: '/my-account', active: false },
  { name: 'FAQ', path: '/faq', active: false },
];

export default function NavigationLink() {
  return (
    <Wrapper>
      <Router>
        {links.map((link, index) => (
          <Link className={link.active ? 'link link-active' : 'link'} to={link.path} key={index}>
            {link.name}
          </Link>
        ))}
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: inherit;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }

  .link {
    margin-left: 36px;
    position: relative;
  }

  .link:hover {
    color: ${gold.gold};
  }

  .link:hover::after {
    content: '';
    position: absolute;
    left: 0;
    width: 25px;
    height: 2px;
    bottom: -3px;
    background: ${gold.gold};
    border-radius: 10px;
  }
  .link-active {
    color: ${gold.gold};
  }

  .link-active::after {
    content: '';
    position: absolute;
    left: 0;
    width: 25px;
    height: 2px;
    bottom: -3px;
    background: ${gold.gold};
    border-radius: 10px;
  }
`;
