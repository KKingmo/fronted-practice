import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
`;

export default function Layout(props) {
  return (
    <Container>
      <LayoutHeader />
      <LayoutBanner />
      <Body>{props.children}</Body>
    </Container>
  );
}
