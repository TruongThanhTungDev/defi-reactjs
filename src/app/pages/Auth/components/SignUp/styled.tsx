import styled from 'styled-components';

export const FormSignUp = styled.div`
  .container-form {
    padding-right: 93px;
  }
  .btn-create {
    margin: 0 auto;
    width: 174px;
    button {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 25.5px;
    }
  }
  .MuiFormHelperText-root.Mui-error {
    bottom: -73px !important;
  }

  .MuiTextField-root {
    margin-top: 5px;
    margin-bottom: 24px;
  }

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    color: #ffffff;
  }
  .detail {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container-form {
      padding: 0px;
    }
  }
  @media (min-width: 320px) and (max-width: 768px) {
    .container-form {
      padding: 0px;
    }
  }
`;
