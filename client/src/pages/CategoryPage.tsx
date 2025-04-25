import { FC } from "react"
import { useAppSelector } from "../app/store"
import { selectCategoryById } from "../features/categories/categoriesSlice"
import { useParams } from "react-router-dom"
import { PageContainer } from "../components/page-container/PageContainer"
import { CategoryHero } from "../components/category-hero/CategoryHero"

const CategoryPage: FC = () => {
  const { id } = useParams()
  const category = useAppSelector(state => selectCategoryById(state.categories, id as string))

  return (
    <PageContainer>
      <CategoryHero title={category?.strCategory} description={category?.strCategoryDescription} imageUrl={category?.strCategoryThumb} />
    </PageContainer>
  )
}

export default CategoryPage
