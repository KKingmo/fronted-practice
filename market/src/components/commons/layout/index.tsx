import styled from "@emotion/styled";
import { useRouter } from "next/router";
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

const HIDDEN_BANNER = ["/login"];

export default function Layout(props) {
  const router = useRouter();
  return (
    <Container>
      <LayoutHeader />
      {!HIDDEN_BANNER.includes(router.pathname) && <LayoutBanner />}
      <Body>{props.children}</Body>
    </Container>
  );
}
