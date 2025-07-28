import { FC, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { PageContainer } from '@/layout';
import { fetchProducts } from '@/features/products/thunks';
import { Products } from '@/features/products/products';
import { useSearchParams } from 'react-router-dom';
import { selectProductsByCategory } from '@/features/products/selectors';
import { BreadCrumbItem, BreadCrumbs, PageHeader } from '@/components';
import routes from '@/shared/variables/routes';

const ProductsPage: FC = () => {
  const dispatch = useAppDispatch();

  const allProducts = useAppSelector((state) => state.products.allProducts);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const selectedProducts = useAppSelector((state) =>
    selectProductsByCategory(state, category)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const displayedProducts = useMemo(() => {
    return category ? selectedProducts : allProducts;
  }, [category, selectedProducts, allProducts]);

  const pageTitle = useMemo(() => {
    return category ? category : 'All Products';
  }, [category]);

  // Safe count calculation
  const productsCount = displayedProducts?.length || 0;

  const breadcrumbItems: BreadCrumbItem[] = [
    { label: 'Home', href: routes.home },
    { label: 'Products', href: routes.products },
  ];
  if (category) {
    breadcrumbItems.push({
      label: category,
    });
  }

  return (
    <PageContainer>
      <BreadCrumbs className='mb-[3.2rem]' />
      <PageHeader
        title={pageTitle}
        description={`${productsCount} products found`}
        className='mb-[4.2rem]'
      />
      <Products items={displayedProducts || []} />
    </PageContainer>
  );
};

export default ProductsPage;
