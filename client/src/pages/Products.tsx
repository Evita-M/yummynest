import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { PageContainer } from "@/layout/PageContainer"
import { fetchProducts } from "@/features/products/thunks"
import { Products } from "@/features/products/Products"

const ProductsPage: FC = () => {
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(state => state.products.allProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <PageContainer>
      <Products title="All Products" count={allProducts.length} items={allProducts}/>
    </PageContainer>
  )
}

export default ProductsPage
