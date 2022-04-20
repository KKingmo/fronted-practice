import Link from "next/link";
import { NAVIGATION_MENUS } from "../Menu";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo
          src="/img/icon-header-logo.svg"
          alt="곰곰"
          onClick={props.moveToPage("/main")}
        />
        <S.Navigation>
          {NAVIGATION_MENUS.map((el) => (
            <li key={el.name}>
              <Link href={{ pathname: el.url }} passHref>
                <span
                  className={
                    props.router.asPath.includes(el.url) ? "isActive" : ""
                  }
                >
                  {el.name}
                </span>
              </Link>
            </li>
          ))}
        </S.Navigation>
      </S.Wrapper>
    </S.Container>
  );
}
