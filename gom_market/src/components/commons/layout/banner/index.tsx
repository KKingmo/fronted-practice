import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 400px;
`;

const SliderItem = styled.img`
  height: 350px;
  margin: auto;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/layout/banner01.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/layout/banner02.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/banner03.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
