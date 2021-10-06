import ButtonField from 'app/components/FormControl/ButtonField';
import InputField from 'app/components/FormControl/InputField';
import SelectField from 'app/components/FormControl/SelectField';
import React from 'react';
import styled from 'styled-components';

interface Iprops {
  form: any;
}
export default function CryptoForm(props: Iprops) {
  const { form } = props;

  const handleSubmit = formValue => {};
  return (
    <Wrapper onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="wrapper">
        <div className="title">Collateral</div>
        <div className="inputWrapper">
          <div className="leftInput">
            <InputField name="collateral" title="Enter amount" form={form} />
            <div className="maxBtn">
              <ButtonField content="Max" style="goldBtn" sizeBtn="small" />
            </div>
          </div>
          <div className="rightInput">
            <SelectField name="collateralSelect" form={form} />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="title">Or</div>
        <div className="exitInput">
          <ButtonField content="Choose Existing collateral" style="outlineBtn" sizeBtn="medium" />
        </div>
      </div>

      <div className="wrapper">
        <div className="title">Duration</div>
        <div className="inputWrapper">
          <div className="leftInput">
            <InputField name="duration" title="Enter amount" form={form} />
          </div>
          <div className="rightInput">
            <SelectField name="durationSelect" form={form} />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="title">Loan amount</div>
        <div className="inputWrapper">
          <div className="leftInput">
            <InputField name="loanAmount" title="Enter amount" form={form} />
          </div>
          <div className="rightInput">
            <SelectField name="loanSelect" form={form} />
          </div>
        </div>
      </div>

      <div className="recommended">
        <span>Recommended amount</span>{' '}
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.49995 4.4422H4.49995V3.4422H5.49995V4.4422ZM5.49995 8.4422H4.49995V5.4422H5.49995V8.4422ZM4.99995 0.9422C4.34334 0.9422 3.69316 1.07153 3.08654 1.3228C2.47991 1.57408 1.92871 1.94237 1.46442 2.40667C0.526738 3.34435 -4.57764e-05 4.61612 -4.57764e-05 5.9422C-4.57764e-05 7.26828 0.526738 8.54005 1.46442 9.47773C1.92871 9.94203 2.47991 10.3103 3.08654 10.5616C3.69316 10.8129 4.34334 10.9422 4.99995 10.9422C6.32604 10.9422 7.59781 10.4154 8.53549 9.47773C9.47317 8.54005 9.99995 7.26828 9.99995 5.9422C9.99995 5.28559 9.87063 4.63541 9.61935 4.02878C9.36808 3.42215 8.99978 2.87096 8.53549 2.40667C8.0712 1.94237 7.52 1.57408 6.91337 1.3228C6.30674 1.07153 5.65656 0.9422 4.99995 0.9422Z"
            fill="#C9CACD"
          />
        </svg>
        <p className="notification">
          To get a loan quickly, you should set desired loan amount between 50 - 70% of the
          collateral value
        </p>
      </div>
      <div className="searchBtn">
        <ButtonField content="Search" style="goldBtn" sizeBtn="big" type="submit" searchIcon />
      </div>
      <div className="searchBtnMobile">
        <ButtonField content="Search" style="goldBtn" sizeBtn="medium" type="submit" searchIcon />
      </div>
      <div className="flagFooter"></div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  .wrapper {
    margin-top: 20px;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      margin-top: 12px;
    }

    .inputWrapper {
      display: flex;
      align-items: center;

      @media screen and (min-width: 320px) and (max-width: 600px) {
        margin-top: 6px;
      }

      input {
        @media screen and (min-width: 320px) and (max-width: 600px) {
          font-size: 14px;
        }
      }
    }

    .exitInput {
      width: 250px;
      margin-top: 20px;

      @media screen and (min-width: 320px) and (max-width: 600px) {
        margin-top: 6px;
        width: 220px;

        button {
          font-size: 12px;
        }
      }
    }

    .leftInput {
      position: relative;
      width: 417px;

      @media screen and (min-width: 320px) and (max-width: 600px) {
        max-width: 220px !important;
      }

      .maxBtn {
        width: 66px;
        position: absolute;
        top: 22px;
        right: 6px;

        @media screen and (min-width: 320px) and (max-width: 600px) {
          top: 4px;
          right: 4px;
          width: 56px;
        }
      }
      button {
        @media screen and (min-width: 320px) and (max-width: 600px) {
          font-size: 14px;
          font-weight: 400;
          line-height: 12px;
        }
      }
    }

    .rightInput {
      margin-left: 12px;
      padding-top: 6px;
      flex: 1;

      @media screen and (min-width: 320px) and (max-width: 600px) {
        padding-top: 0;
      }

      fieldset {
        border: none;
      }
    }

    .title {
      color: var(--primary-color);
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;

      @media screen and (min-width: 320px) and (max-width: 600px) {
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
      }
    }
  }

  .recommended {
    position: relative;
    color: #c9cacd;
    cursor: text;
    margin-top: 10px;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      margin-top: 6px;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
    }

    .notification {
      position: absolute;
      width: 760px;
      background-color: #808080;
      color: #fff;
      padding: 2px 20px;
      border-radius: 5px;
      left: -100px;
      top: 20px;
      display: none;
      font-size: 14px;

      animation: notification 0.3s ease;
    }

    &:hover .notification {
      display: block;
    }

    svg {
      width: 20px;
      height: 20px;

      @media screen and (min-width: 320px) and (max-width: 600px) {
        width: 14px;
        height: 14px;
      }
    }
  }

  .searchBtn {
    margin-top: 60px;
    margin-bottom: 106px;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      display: none;
    }

    button {
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
    }
  }

  .searchBtnMobile {
    display: none;

    @media screen and (min-width: 320px) and (max-width: 600px) {
      display: block;
      margin: 40px 0;

      button {
        line-height: 22px;
      }
    }
  }

  .flagFooter {
    width: 100%;
    height: 1px;
  }
  @keyframes notification {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
