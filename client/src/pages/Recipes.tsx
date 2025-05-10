import { FC } from 'react';
import { PageContainer } from '@/layout/PageContainer';
import { RecipeHero } from '@/modules/recipe-hero/RecipeHero';
import { useGetRandomRecipeQuery } from '@/features/recipes/recipesApi';
import {
  BreadCrumbItem,
  BreadCrumbs,
} from '@/components/breadcrumbs/BreadCrumbs';
import { PageHeader } from '@/components/page-header/PageHeader';

const RecipesPage: FC = () => {
  const { data } = useGetRandomRecipeQuery({});
  const recipe = data?.meals[0];
  const breadcrumbItems: BreadCrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Recipes', href: '/recipes' },
  ];

  return (
    <PageContainer>
      <BreadCrumbs items={breadcrumbItems} className='mb-[3.2rem]' />
      <PageHeader title='Cook Today' className='mb-[4.2rem]' />
      <RecipeHero
        name={recipe?.strMeal}
        category={recipe?.strCategory}
        area={recipe?.strArea}
        instructions={recipe?.strInstructions}
        imgUrl={recipe?.strMealThumb}
        className='mb-16'
      />
    </PageContainer>
  );
};

export default RecipesPage;
