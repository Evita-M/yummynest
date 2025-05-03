import { Products } from "@/features/products/Products"
import { PageContainer } from "@/layout/PageContainer"
import { FC } from "react"

const ProductsPage: FC = () => {
  return (
    <PageContainer>
      <Products title="Products" />
    </PageContainer>
  )
}

export default ProductsPage
