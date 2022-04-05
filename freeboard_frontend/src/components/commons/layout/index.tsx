import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Body = styled.div``;

const HIDDEN = [
  "/",
  // ... 숨기고 싶은 페이지
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  return (
    <>
      {!isHidden && <LayoutHeader />}
      {!isHidden && <LayoutBanner />}
      {!isHidden && <LayoutNavigation />}
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
    </>
  );
}
