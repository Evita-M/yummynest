import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { useParams } from "react-router-dom"
import { PageContainer } from "@/layout/PageContainer"
import { fetchProductsByCategory } from "@/features/products/thunks"
import { Products } from "@/features/products/Products"

const CategoryPage: FC = () => {
  const { category } = useParams()
  const dispatch = useAppDispatch()
  const categoryProducts = useAppSelector(state => state.products.categoryProducts)

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category))
    }
  }, [dispatch, category])

  return (
    <PageContainer>
      <Products title={category} items={categoryProducts}/>
    </PageContainer>
  )
}

export default CategoryPage
