import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { ProductCard } from '@/components/product-card/ProductCard';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  selectAllCartItems,
} from '@/features/cart/cartSlice';
import { Loader } from '@/components/loader/Lodaer';
import { Product } from './model/product';

interface ProductsProps {
  items: Product[];
}

export const Products: FC<ProductsProps> = ({ items }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectAllCartItems);
  const { status } = useAppSelector((state) => state.products);

  const getCartItemInfo = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <section className='flex h-full flex-col'>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-2 gap-[3.2rem] md:grid-cols-3 lg:grid-cols-4'>
          {items.map((product: Product) => {
            const { id, name, price, offerPrice, inStock } = product;
            const quantity = getCartItemInfo(id);
            return (
              <ProductCard
                key={id}
                name={name}
                price={price.toFixed(2)}
                offerPrice={(offerPrice || price).toFixed(2)}
                onClick={() =>
                  dispatch(
                    addToCart({
                      id,
                      name,
                      price,
                      offerPrice: offerPrice || price,
                    })
                  )
                }
                onIncrement={() => handleIncrement(id)}
                onDecrement={() => handleDecrement(id)}
                inCartQuantity={quantity}
                href={`/products/${id}`}
                inStock={inStock}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
