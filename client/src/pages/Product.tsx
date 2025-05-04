import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/store';
import { fetchProductById } from '@/features/products/thunks';
import vegetableImg from "@/assets/images/vegetable.png"
import { BreadCrumbs } from '@/components/breadcrumbs/BreadCrumbs';
import { Loader } from '@/components/loader/Lodaer';
import { ProductPricing } from '@/modules/product-pricing/ProductPricing';
import { List } from '@/components/list/List';
import { Rating } from '@/components/rating/Rating';
import { addToCart, incrementQuantity, decrementQuantity, selectAllCartItems } from '@/features/cart/cartSlice';
import { Badge } from '@/components/badge/Badge';
import { PageContainer } from '@/layout/PageContainer';

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
  const cartItems = useAppSelector(selectAllCartItems);

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

  const getCartItemInfo = () => {
    const item = cartItems.find((item) => item.id === product.id);
    return {
      inCart: !!item,
      quantity: item?.quantity || 0
    };
  };

  const { inCart, quantity } = getCartItemInfo();

  const handleIncrement = () => {
    if (!inCart) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        offerPrice: product.offerPrice
      }));
    } else {
      dispatch(incrementQuantity(product.id));
    }
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity(product.id));
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      offerPrice: product.offerPrice
    }));
  };

  return (
    <PageContainer maxWidth="1000px">
      <BreadCrumbs items={[
        {label: 'Products', href: '/products'},
        {label: product.category, href: `/${product.category.toLowerCase()}`},
        {label: product.name}
      ]} className="mb-[3.2rem]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem]">
        <div className="flex gap-[2rem]">
          <div className="flex-1 flex items-center justify-center aspect-square bg-white rounded-[2rem] overflow-hidden relative">
            {!product.inStock && <Badge text="Sold out" bgColor='bg-blue-light' color='text-blue' className="absolute top-[1.2rem] right-[1.2rem]"/>}
            <img
              src={vegetableImg}
              alt={product.name}
              className="w-[320px] h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[2rem]">
        <div>
         <h1 className="!mb-[1.2rem]">{product.name}</h1>
         <div className="flex items-center gap-2">
           <Rating rating={4} />
           <span className="text-gray-500">37 reviews</span>
        </div>
       </div>
       <List items={product.description} />
       <ProductPricing
            price={product.price.toFixed(2)}
            offerPrice={product.offerPrice.toFixed(2)}
            inStock={product.inStock}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            inCartQuantity={quantity}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductPage;
