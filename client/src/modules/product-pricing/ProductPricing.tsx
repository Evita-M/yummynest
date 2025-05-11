import { FC } from 'react';
import { AddButton } from '@/components/product-card/add-button';

interface ProductPricingProps {
  price: string;
  offerPrice: string;
  inStock: boolean;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
  inCartQuantity: number;
  onClick: VoidFunction;
}

export const ProductPricing: FC<ProductPricingProps> = ({
  price,
  offerPrice,
  inStock,
  onIncrement,
  onDecrement,
  inCartQuantity,
  onClick,
}) => {
  return (
    <div className='rounded-[1.2rem] bg-white p-[2.4rem]'>
      <p className='text-blue mb-[2rem] font-medium'>
        Orginal Price: <span className='line-through'>€ {price}</span>
      </p>
      <div className='flex w-full items-center justify-between'>
        <p className='font-secondary flex-1/2 whitespace-nowrap !text-5xl font-medium'>
          € {offerPrice}
        </p>
        <AddButton
          onClick={onClick}
          inCartQuantity={inCartQuantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          isDisabled={!inStock}
          label={inStock ? 'Add to Cart' : 'Out of Stock'}
          className='flex-1/2'
        />
      </div>
    </div>
  );
};
