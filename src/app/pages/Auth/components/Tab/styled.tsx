import styled from 'styled-components';

export const FormTabAuth = styled.div`
  background-color: #232732;
  color: white;
  padding: 19px 292px 131px 298px;
  .container-tab {
    display: flex;
  }
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    margin: 19px 0 8px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 66px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 50px;
  }
  .title-tab {
    color: #dba83d;
  }
  .btn-tab {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    color: #ffffff;
    text-transform: capitalize;
  }
  .btn-tab:active,
  .btn-tab:focus {
    color: #dba83d;
  }

  .MuiTab-textColorPrimary {
    color: white;
  }
  .MuiTabs-indicator {
    width: 118px !important;
    height: 3px !important;
    background-color: #dba83d;
  }
  .css-1aquho2-MuiTabs-indicator {
    left: 100px;
  }
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #dba83d;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    padding: 19px 200px 50px 200px;
    img {
      width: 100%;
      height: auto;
      padding-left: 40px;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 21px 40px 42px 40px;
    img {
      width: 100%;
      height: auto;
      padding-bottom: 30px;
    }
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 46px;
      line-height: 54px;
      margin-bottom: 12px;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
    }
    .container-tab {
      flex-direction: column-reverse;
    }
  }
  @media (min-width: 374px) and (max-width: 768px) {
    padding: 21px 16px 32px 16px;
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 12px;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
    img {
      width: 100%;
      height: auto;
      padding-bottom: 24px;
    }
    .container-tab {
      flex-direction: column-reverse;
    }
    .mark {
      display: none;
    }
  }
`;
