import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 300px;
  background-color: #eda8a8;
  img {
    width: 300px;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 100,
  cssEase: "linear",
};

export default function LayoutBanner() {
  return (
    <Wrapper>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="https://cdn.pixabay.com/photo/2018/08/18/08/05/boy-3614307_1280.jpg" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/11/23/07/46/babe-2972220_1280.jpg" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/05/07/12/53/turtle-2292331_1280.jpg" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/08/16/10/58/athletes-1597680_1280.jpg" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
