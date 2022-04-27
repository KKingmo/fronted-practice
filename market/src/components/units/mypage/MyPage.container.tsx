import MyPageUI from "./MyPage.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS_I_PICKED } from "./MyPage.queries";
import { useRouter } from "next/router";
import { getToday } from "../../../commons/libraries/utils";

export default function MyPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: { search: "" },
  });

  // 상품클릭
  const onClickPickedItem = (event) => {
    router.push(`/shop/${event.currentTarget.id}`);
  };

  return (
    <MyPageUI
      data={data?.fetchUseditemsIPicked}
      onClickPickedItem={onClickPickedItem}
    />
  );
}
