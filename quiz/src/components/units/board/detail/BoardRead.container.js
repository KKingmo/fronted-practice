import { FETCH_BOARD } from "./BoardRead.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardReadUI from "./BoardRead.presenter";

export default function BoardRead() {
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) },
    });

    console.log(data);

    return <BoardReadUI data={data} />;
}
