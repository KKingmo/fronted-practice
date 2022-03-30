import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  height: 500px;
`;

const LayoutSidebar = styled.div`
  width: 100px;
  height: 500px;
  background-color: orange;
`;

const HIDDEN_HEADERS = [
  "/12-05-modal-refactoring",
  "/12-04-state-prev",
  // ... 숨기고 싶은 페이지
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHidden = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드바입니다!</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>

      <LayoutFooter />
    </>
  );
}
