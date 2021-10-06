import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import { neutral } from 'themes/neutral';

export default function LinksBars() {
  return (
    <Wrapper>
      <Router>
        <ul>
          <li>
            <Link to="/">Pawn</Link>
          </li>
          <li>
            <Link to="/">Staking</Link>
          </li>
          <li>
            <Link to="/">NFT</Link>
          </li>

          <Accordion
            square={true}
            disableGutters={true}
            sx={{
              color: '#fff',
              minHeight: '44px',
              background: `${neutral.black}`,
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
            >
              My account
            </AccordionSummary>

            <AccordionDetails>
              {/* borrower profile */}
              <Accordion
                disableGutters={true}
                square={true}
                sx={{
                  color: '#fff',
                  minHeight: '44px',
                  boxShadow: 'none',
                  background: `${neutral.black}`,
                  '& .MuiAccordion-root': {
                    minHeight: '44px',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: '#fff',
                        minHeight: '44px',
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
                >
                  Borrower Profile
                </AccordionSummary>

                <AccordionDetails>
                  <li>
                    <Link to="/">Collateral</Link>
                  </li>
                  <li>
                    <Link to="/">Contracts</Link>
                  </li>
                </AccordionDetails>
              </Accordion>

              {/* lender profile */}
              <Accordion
                disableGutters={true}
                square={true}
                sx={{
                  boxShadow: 'none',
                  color: '#fff',
                  minHeight: '44px',
                  background: `${neutral.black}`,
                  '& .MuiAccordion-root': {
                    minHeight: '44px',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: '#fff',
                        minHeight: '44px',
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
                >
                  Lender Profile
                </AccordionSummary>

                <AccordionDetails>
                  <li>
                    <Link to="/">Offers sent</Link>
                  </li>
                  <li>
                    <Link to="/">Contracts</Link>
                  </li>
                  <li>
                    <Link to="/">Pawnshop Loan Packages</Link>
                  </li>
                  <li>
                    <Link to="/">Loan requests</Link>
                  </li>
                </AccordionDetails>
              </Accordion>

              {/* staking */}

              <li>
                <Link to="/">Staking</Link>
              </li>

              {/* NFT profile */}
              <Accordion
                disableGutters={true}
                square={true}
                sx={{
                  boxShadow: 'none',
                  color: '#fff',
                  minHeight: '44px',
                  background: `${neutral.black}`,
                  '& .MuiAccordion-root': {
                    minHeight: '44px',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: '#fff',
                        minHeight: '44px',
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ maxHeight: '44px', color: '#fff', minHeight: '44px' }}
                >
                  NFT
                </AccordionSummary>

                <AccordionDetails>
                  <li>
                    <Link to="/">NFT List</Link>
                  </li>
                  <li>
                    <Link to="/">NFT Auction</Link>
                  </li>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Change password</Link>
          </li>
          <li>
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    height: 44px;
    line-height: 44px;
    padding: 0px 16px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
