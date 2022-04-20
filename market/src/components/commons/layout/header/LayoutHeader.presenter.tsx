import Link from "next/link";
import { NAVIGATION_MENUS } from "../Menu";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <S.Container>
      <div>
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
        <div></div>
      </div>
    </S.Container>
  );
}
