import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/store';
import { fetchProductById } from '@/features/products/thunks';
import { ProductDetail } from '@/modules/product-detail/ProductDetail';
import vegetableImg from "@/assets/images/vegetable.png"
import { BreadCrumbs } from '@/components/breadcrumbs/BreadCrumbs';
import { Loader } from '@/components/loader/Lodaer';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  offerPrice: number;
  description: string[];
  createdAt: string;
  updatedAt: string;
  inStock: boolean;
}

const ProductPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const [product, setProduct] = React.useState<Product | null>(null)
  const { status } = useAppSelector(state => state.products)

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await dispatch(fetchProductById(id!)).unwrap()
      if (product) {
        setProduct(product);
      }
    };
    fetchProduct();
  }, [dispatch, id]);

  if (status === 'loading') {
    return (
        <Loader/>
    );
  }

  if (status === 'failed' || !product) {
    return (
        <h1>Error loading product</h1>
    )
  }

  return (
    <div className="container mx-auto">
      <BreadCrumbs items={[
        {label: 'Products', href: '/products'},
        {label: product.category, href: `/products/${product.category.toLowerCase()}`},
        {label: product.name}
      ]} className="mb-[3.2rem]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem]">
        <div className="flex gap-[2rem]">
          <div className="flex-1 flex items-center justify-center aspect-square bg-white rounded-[2rem] overflow-hidden">
            <img
              src={vegetableImg}
              alt={product.name}
              className="w-[320px] h-auto object-cover"
            />
          </div>
        </div>
        <ProductDetail
          name={product.name}
          price={product.price}
          offerPrice={product.offerPrice}
          description={product.description}
          inStock={product.inStock}
        />
      </div>
    </div>
  );
};

export default ProductPage;
