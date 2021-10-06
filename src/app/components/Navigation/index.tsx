import React, { useState } from 'react';
import styled from 'styled-components';
import DefiLogo from './components/DefiLogo';
import NavigationLink from './components/NavigationLink';
import { DefiBreakpoints } from './DefiBreakpoints';
import { neutral } from 'themes/neutral';
import DefiButton from './components/DefiButton';

import barIcon from './assets/bar-icon.svg';
import closeBar from './assets/close-bar.svg';
import MenuBars from './components/MenuBars';

export default function Navigation() {
  const [openBars, setOpenBars] = useState(false);

  return (
    <Wrapper>
      {/* logo, navlink */}
      <div className="nav-left">
        <DefiLogo />
        <div className="navigation-link">
          <NavigationLink />
        </div>
      </div>

      <div className="menubars">
        <MenuBars open={openBars} />
      </div>

      {/* button */}
      <div className="button-container">
        <div className="dnone-sm">
          <DefiButton isGold={true} content="Become a Pawnshop" />
        </div>

        <div className="dnone-sm">
          <DefiButton content="Buy DFY" />
        </div>

        <DefiButton content="Connect" />

        <div className="dnone-sm">
          <DefiButton content="Login" />
        </div>

        {/* icon, dialog bars */}
        <div className="menu-mobile" onClick={() => setOpenBars(openBars => !openBars)}>
          {openBars ? <img src={closeBar} alt="bars" /> : <img src={barIcon} alt="bars" />}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  width: 100%;

  padding: 0px 30px;

  background: #232732;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${neutral.grey4};

  transition: all 300ms ease-in;

  @media screen and (max-width: ${DefiBreakpoints.md}) {
    height: 56px;
    padding: 0px 16px;
    transition: all 300ms ease-in;
  }

  /* nav link - dialog bars */

  .navigation-link {
    display: block;
  }

  .menu-mobile {
    padding-left: 16px;

    display: none;

    cursor: pointer;
  }

  .menubars {
    display: none;
  }

  @media screen and (max-width: ${DefiBreakpoints.xlg}) {
    .navigation-link {
      display: none;
    }

    .menu-mobile,
    .menubars {
      display: block;
    }
  }

  .nav-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  /* button */

  .button-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .dnone-sm {
    display: block;
  }

  @media screen and (max-width: 850px) {
    .dnone-sm {
      display: none;
    }
  }
`;
