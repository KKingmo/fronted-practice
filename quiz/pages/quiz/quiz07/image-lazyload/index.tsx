import LazyLoad from "react-lazy-load";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-left: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ImageLazyLoadPage() {
  return (
    <Wrapper>
      Scroll to load images.
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/19/08/32/relax-7142183__480.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/24/16/01/beach-7153932__340.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/21/20/49/road-7148369__340.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/21/19/47/lion-7148207__340.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/19/08/32/relax-7142183__480.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/03/08/15/44/boy-7056003__340.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/23/17/16/cascade-7152189__340.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280__340.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/11/09/32/glacier-7125359__340.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/03/30/15/52/gerbera-7101430__340.jpg" />
      </LazyLoad>
    </Wrapper>
  );
}
