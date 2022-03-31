import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  width: 100%;
`;

const LayoutSidebar = styled.div`
  width: 400px;
  background-color: skyblue;
`;

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />

      <LayoutBanner />

      <LayoutNavigation />

      <BodyWrapper>
        <LayoutSidebar>Sidebar Area</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>

      <LayoutFooter />
    </>
  );
}
