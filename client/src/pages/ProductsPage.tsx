import { FC } from "react"
import { PageContainer } from "../components/page-container/PageContainer"
import { Products } from "../features/products/Products"

const ProductsPage: FC = () => {
  return (
    <PageContainer>
      <Products title="Products" />
    </PageContainer>
  )
}

export default ProductsPage
