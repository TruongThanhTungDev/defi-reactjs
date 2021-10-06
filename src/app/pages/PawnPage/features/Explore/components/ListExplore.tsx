import styled from 'styled-components';
import ItemExplore from './ItemExplore';
import Slider from 'react-slick';

export default function ListExplore() {
  const fakeListImg = [
    {
      id: 1,
      image: 'images/firstSlider.png',
      headerContent: 'Pawnshop America',
      content: 'Pawnshop America',
    },
    {
      id: 2,
      image: 'images/secondSlider.png',
      headerContent: 'Pawnshop America',
      content: 'Pawnshop America',
    },
    {
      id: 3,
      image: 'images/thirdSlider.png',
      headerContent: 'Pawnshop America',
      content: 'Pawnshop America',
    },
    {
      id: 4,
      image:
        'https://av.sc.com/corp-en/content/images/asian_couple_holding_hands_personal_banking_clients.jpg',
      headerContent: 'Pawnshop America',
      content: 'Pawnshop America',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const settingMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <div className="seeAll">See all &rarr;</div>

      <div className="sliderPc">
        <Slider {...settings}>
          {fakeListImg.map(item => (
            <ItemExplore
              key={item.id}
              image={item.image}
              headerContent={item.headerContent}
              content={item.content}
            />
          ))}
        </Slider>
      </div>

      <div className="sliderMobile">
        <Slider {...settingMobile}>
          {fakeListImg.map(item => (
            <ItemExplore
              key={item.id}
              image={item.image}
              headerContent={item.headerContent}
              content={item.content}
            />
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1340px;
  margin: auto;
  position: relative;

  @media screen and (min-width: 374px) and (max-width: 600px) {
    max-width: 1025px;
  }

  .sliderPc {
    @media screen and (min-width: 374px) and (max-width: 600px) {
      display: none;
    }
  }

  .seeAll {
    position: absolute;
    right: 0;
    top: -34px;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    cursor: pointer;

    @media screen and (min-width: 374px) and (max-width: 600px) {
      display: none;
    }
  }

  .slick-arrow {
    position: absolute;
    top: 26%;

    &::before {
      font-size: 60px;
      color: var(--secondary-color);
      font-weight: bold;

      @media screen and (min-width: 374px) and (max-width: 600px) {
        font-size: 30px;
      }

      @media screen and (min-width: 601px) and (max-width: 1025px) {
        font-size: 25px;
      }
    }
  }

  .slick-prev {
    position: absolute;
    left: -100px;

    @media screen and (min-width: 374px) and (max-width: 600px) {
      left: 10px;
    }

    @media screen and (min-width: 601px) and (max-width: 1025px) {
      left: 0;
    }
  }

  .slick-next {
    position: absolute;
    right: -70px;

    @media screen and (min-width: 374px) and (max-width: 600px) {
      right: 20px;
    }

    @media screen and (min-width: 601px) and (max-width: 1025px) {
      right: 0;
    }
  }

  .sliderMobile {
    display: none;

    @media screen and (min-width: 374px) and (max-width: 600px) {
      display: block;
    }
  }
`;
