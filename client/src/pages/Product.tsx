import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/store';
import { fetchProductById } from '@/features/products/thunks';
import vegetableImg from '@/assets/images/vegetable.png';
import {
  BreadCrumbItem,
  BreadCrumbs,
} from '@/components/breadcrumbs/BreadCrumbs';
import { Loader } from '@/components/loader/Lodaer';
import { ProductPricing } from '@/modules/product-pricing/ProductPricing';
import { List } from '@/components/list/List';
import { Rating } from '@/components/rating/Rating';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  selectAllCartItems,
} from '@/features/cart/cartSlice';
import { Badge } from '@/components/badge/Badge';
import { PageContainer } from '@/layout/PageContainer';
import routes from '@/shared/variables/routes';

const ProductPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { product, productStatus } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector(selectAllCartItems);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    } else {
    }
  }, [dispatch, id]);

  if (productStatus === 'loading') {
    return (
      <PageContainer>
        <Loader />
      </PageContainer>
    );
  }

  if (productStatus === 'failed') {
    return (
      <PageContainer>
        <h1>Error loading product</h1>
      </PageContainer>
    );
  }

  if (!product) {
    return (
      <PageContainer>
        <h1>Product not found</h1>
      </PageContainer>
    );
  }

  const getCartItemInfo = (productId: string) => {
    const item = cartItems.find((item) => item.id === productId);
    return {
      inCart: !!item,
      quantity: item?.quantity || 0,
    };
  };

  const { inCart, quantity } = getCartItemInfo(product.id);

  const handleIncrement = () => {
    if (!inCart) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          offerPrice: product.offerPrice,
        })
      );
    } else {
      dispatch(incrementQuantity(product.id));
    }
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(product.id));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        offerPrice: product.offerPrice,
      })
    );
  };

  const breadcrumbItems: BreadCrumbItem[] = [
    { label: 'Home', href: routes.home },
    { label: 'Products', href: routes.products },
    {
      label: product.categoryName,
      href: `${routes.products}?category=${product.categoryName}`,
    },
    { label: product.name },
  ];

  return (
    <PageContainer>
      <BreadCrumbs items={breadcrumbItems} className='mb-[3.2rem]' />
      <div className='mx-auto grid max-w-[1000px] grid-cols-1 gap-[4rem] md:grid-cols-2'>
        <div className='flex gap-[2rem]'>
          <div className='relative flex aspect-square flex-1 items-center justify-center overflow-hidden rounded-[2rem] bg-white'>
            {!product.inStock && (
              <Badge
                text='Sold out'
                bgColor='bg-blue-light'
                color='text-blue'
                className='absolute right-[1.2rem] top-[1.2rem]'
              />
            )}
            <img
              src={vegetableImg}
              alt={product.name}
              className='h-auto w-[320px] object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col gap-[2rem]'>
          <div>
            <h1 className='!mb-[1.2rem]'>{product.name}</h1>
            <div className='flex items-center gap-2'>
              <Rating rating={4} />
              <span className='text-gray-500'>37 reviews</span>
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
