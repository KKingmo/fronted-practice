import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.container";
import ProductContactWrite from "../../../src/components/units/contact/write/ProductContactWrite.container";
import ProductContactList from "../../../src/components/units/contact/list/ProductContactList.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <ProductContactWrite />
      <ProductContactList />
    </>
  );
}
