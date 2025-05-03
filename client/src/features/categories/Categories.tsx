import { FC, useEffect } from "react"
import { CategoryCard } from "@/modules/category-card/CategoryCard"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectAllCategories } from "./categoriesSlice"
import { useNavigate } from "react-router-dom"
import { fetchCategories } from "./thunks"

interface CategoriesProps {
  title: string
}

export const Categories: FC<CategoriesProps> = ({ title }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const categories = useAppSelector(state => selectAllCategories(state.categories))

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories())
    }
  }, [dispatch, categories.length])

  return (
	<section>
		<h2>{title}</h2>
		<div className='flex flex-wrap gap-[4rem] justify-center'>
			{categories.map(({idCategory, strCategory, strCategoryThumb}) => (
				<CategoryCard key={idCategory} id={idCategory} name={strCategory} imgUrl={strCategoryThumb} onClick={() => navigate(`/categories/${idCategory}`)} />
			))}
		</div>
	</section>
  )
}
