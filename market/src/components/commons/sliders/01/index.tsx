import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 300px;
  height: auto;

  .slick-arrow {
  }

  .slick-next {
    right: -20px;
    transform: translate(100%, -150%);
  }

  .slick-prev {
    left: -28px;
    transform: translate(-100%, -150%);
  }

  .slick-next:before {
    font-size: 1.5rem;
    color: #bdbdbd;
  }

  .slick-prev:before {
    font-size: 1.5rem;
    color: #bdbdbd;
  }

  .slick-dots {
    position: relative;

    & > li {
      margin: 0 0.3rem;
      width: 50px;
      height: 50px;
      border: 1px solid #bdbdbd;
    }

    & > li > a > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slick-dots li.slick-active button:before {
    color: #fcd91f;
  }

  .slick-dots li button:before {
    color: #bdbdbd;
  }
`;

const SliderItem = styled.div`
  width: 300px;
  height: 300px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Slider01(props) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        props.images[i] && (
          <a>
            <img src={`https://storage.googleapis.com/${props.images[i]}`} />
          </a>
        )
      );
    },
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {props.images
          ?.filter((e) => e)
          .map((el) => (
            <SliderItem key={uuidv4()}>
              <img src={`https://storage.googleapis.com/${el}`} />
            </SliderItem>
          ))}
      </Slider>
    </Wrapper>
  );
}
