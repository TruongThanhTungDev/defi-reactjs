import styled from 'styled-components';

interface IProps {
  image?: string;
  headerContent?: string;
  content?: string;
}

export default function ItemExplore(props: IProps) {
  const { image, headerContent, content } = props;
  return (
    <Wrapper>
      <img alt="ảnh" src={image} />
      <div className="title">
        <p className="headerContent">{headerContent}</p>
        <p className="content">{content}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 428px;
  color: var(--primary-color);
  margin: 0 10px;
  overflow: hidden;
  padding-bottom: 80px;
  margin: auto;

  @media screen and (min-width: 374px) and (max-width: 600px) {
    width: 283px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 601px) and (max-width: 1025px) {
    width: 180px;
  }

  @media screen and (min-width: 601px) and (max-width: 1025px) {
    width: 210px;
  }

  img {
    border-radius: 20px;
    width: 100%;
    height: 268px;

    @media screen and (min-width: 374px) and (max-width: 600px) {
      height: 177px;
    }

    @media screen and (min-width: 601px) and (max-width: 1025px) {
      height: 180px;
    }
  }

  .headerContent {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;

    @media screen and (min-width: 374px) and (max-width: 600px) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  .content {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;

    @media screen and (min-width: 374px) and (max-width: 600px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
