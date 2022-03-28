// 상품 등록 페이지
import ProductWrite from "../../../../src/components/units/product/product-write/ProductWrite.container";

export default function ProductNewPage() {
    const async = () => {
        const result = await createBoard({
          variables: {
            headWriter: boardWritePackage.headWriter,
            headPassword: boardWritePackage.headPassword,
            headTitle: boardWritePackage.headTitle,
            headContent: boardWritePackage.headContent
          }
        })
        const message = "입력이 완료되었습니다."
        alert(message);
        const id_val = result.data.createBoard._id
        router.push(`/board/detailwrite/${id_val}`)
        }
        
    return <ProductWrite isEdit={false} />;
}
