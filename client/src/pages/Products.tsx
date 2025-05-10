import { FC, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { PageContainer } from '@/layout/PageContainer';
import { fetchProducts } from '@/features/products/thunks';
import { Products } from '@/features/products/Products';
import { useSearchParams } from 'react-router-dom';
import { selectProductsByCategory } from '@/features/products/selectors';
import {
  BreadCrumbItem,
  BreadCrumbs,
} from '@/components/breadcrumbs/BreadCrumbs';
import { PageHeader } from '@/components/page-header/PageHeader';

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

  const breadcrumbItems: BreadCrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
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
        description={`${displayedProducts.length} products found`}
        className='mb-[4.2rem]'
      />
      <Products items={displayedProducts} />
    </PageContainer>
  );
};

export default ProductsPage;
