import { FC } from "react"
import { PageContainer } from "../components/page-container/PageContainer"
import { Categories } from "../features/categories/Categories"
import { RecipeHero } from "../components/recipe-hero/RecipeHero"
import { useGetRandomRecipeQuery } from "../features/recipes/recipes-api"

const RecipesPage: FC = () => {
const {data} = useGetRandomRecipeQuery({})
const recipe = data?.meals[0]
  return (
    <PageContainer>
      <RecipeHero name={recipe?.strMeal} category={recipe?.strCategory} area={recipe?.strArea} instructions={recipe?.strInstructions} imgUrl={recipe?.strMealThumb} className="mb-16" />
      <Categories title="Categories" />
    </PageContainer>
  )
}

export default RecipesPage
