import styled from 'styled-components';

export const FormLogin = styled.div`
  .container-form {
    padding-right: 93px;
  }

  .MuiFormHelperText-root.Mui-error {
    bottom: -73px !important;
  }
  input {
    color: #fff;
    outline: none;
    padding: 12px 20px;
  }
  .btn-sign {
    margin: 0 auto;
    width: 117px;
    button {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 25.5px;
    }
  }

  .MuiTextField-root {
    margin-top: 5px;
    margin-bottom: 24px;
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
  @media (min-width: 320px) and (max-width: 768px) {
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
