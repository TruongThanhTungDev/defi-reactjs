import styled from 'styled-components';

export const FormLogin = styled.div`
  .container-form {
    padding-right: 93px;
  }
  .btn {
    text-align: center;
  }
  .btn-sign {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #282c37;
    padding: 14px 33px;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
    border-radius: 1000px;
  }
  .MuiInputBase-formControl {
    border: 1px solid #74767b;
    box-sizing: border-box;
    border-radius: 22px;
    height: 44px;
  }
  .MuiTextField-root {
    margin-top: 5px;
    margin-bottom: 24px;
  }
  .input {
    color: white;
  }
  .forgotPass {
    text-align: end;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    text-decoration-line: underline;
  }
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    color: #ffffff;
  }
  @media (min-width: 374px) and (max-width: 768px) {
    .container-form {
      padding: 0px;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .container-form {
      padding: 0px;
    }
    img {
      width: 100%;
      height: auto;
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
  }
`;
