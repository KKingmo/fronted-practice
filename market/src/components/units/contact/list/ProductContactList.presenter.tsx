import ProductContactListUIItem from "./ProductContactList.presenterItem";
import { v4 as uuidv4 } from "uuid";

export default function ProductContactListUI(props) {
  return (
    <>
      {props.data?.map((el) => (
        <ProductContactListUIItem key={uuidv4()} el={el} />
      ))}
    </>
  );
}
