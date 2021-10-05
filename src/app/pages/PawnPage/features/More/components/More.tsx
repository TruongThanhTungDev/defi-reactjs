import styled from 'styled-components';
import bgimg from '../assets/bg-more.png';
import bgimg375 from '../assets/bg375.png';

const MoreUI = () => {
  return (
    <ContainerMore>
      <BgImg>
        <H2>Become a Pawnshop</H2>
        <PL>
          Open your own pawn shop and discover a new business opportunity with an unmatched ROI. Be
          a part of the world's financial revolution
        </PL>
        <PS>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</PS>
        <Button>Learn more</Button>
      </BgImg>
    </ContainerMore>
  );
};

const ContainerMore = styled.div`
  width: 100%;
  background-color: #171a23;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
`;

const BgImg = styled.div`
  background-image: url(${bgimg});
  width: 70%;
  border-radius: 20px;
  background-size: cover;

  margin-top: 60px;
  margin-bottom: 80px;
  padding-left: 98px;
  padding-top: 48px;
  padding-bottom: 56px;

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    background-image: url(${bgimg375});
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 12px;
    width: 92%;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 1800) {
    background-size: cover;
  }
`;

const Button = styled.button`
  width: 142px;
  height: 48px;
  border-radius: 172px;
  color: #282c37;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  border: 0px;

  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    margin-top: 12px;
    width: 121px;
    height: 36px;
    font-weight: 500;
    font-size: 14px;
  }
`;

const H2 = styled.h2`
  color: #ffffff;
  font-weight: 600;
  font-size: 36px;
  margin: 0px;
  @media only screen and (min-width: 375px) and (max-width: 600px) {
    font-size: 16px;
  }
`;

const PL = styled.p`
  color: #ffffff;
  width: 40%;
  height: 72px;
  font-size: 20px;
  font-weight: 500;
  margin: 0px;

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    /* width: 50%;
    font-size: 12px; */
    display: none;
  }
`;

const PS = styled.p`
  color: #ffffff;
  display: none;
  width: 50%;
  font-weight: 500;
  font-size: 12px;
  margin: 0px;
  @media only screen and (min-width: 375px) and (max-width: 600px) {
    display: block;
  }
`;

export default MoreUI;
