import { FC } from 'react';
import { AddButton } from './add-button';
import { Price, Badge } from '@/components';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ProductCardProps {
  name: string;
  price: string;
  offerPrice: string;
  imageSrc?: string;
  onClick: VoidFunction;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
  inCartQuantity: number;
  href: string;
  inStock: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  name,
  imageSrc,
  price,
  offerPrice,
  onClick,
  onIncrement,
  onDecrement,
  inCartQuantity,
  href,
  inStock,
}) => {
  return (
    <div
      className='hover:shadow-hover group relative flex w-full flex-col rounded-[1.2rem] bg-white transition-all duration-300'
      data-testid='product-card'
    >
      {!inStock && (
        <Badge
          text='Sold out'
          bgColor='bg-blue-light'
          color='text-blue'
          className='absolute right-[1.2rem] top-[1.2rem]'
          data-testid='sold-out-badge'
        />
      )}
      <Link to={href} className='flex flex-col'>
        <span className='flex h-[240px] w-full flex-col items-center justify-center overflow-hidden rounded-[1.2rem] p-[1rem]'>
          <img
            src={
              imageSrc ? `/images/${imageSrc}.webp` : '/images/vegetable.png'
            }
            width={240}
            height='auto'
            alt={name}
            className={clsx(
              'transition-transform duration-300 group-hover:scale-105',
              !inStock && 'opacity-50'
            )}
          />
        </span>
        <div className='p-[1.2rem]'>
          <h3 className='font-secondary !my-[0.8rem] line-clamp-1 !text-[1.8rem]'>
            {name}
          </h3>
          <div
            className='mt-2 flex items-end gap-[0.8rem]'
            data-testid='product-price'
          >
            <Price price={offerPrice} />
            <p className='!text-[1.4rem] tracking-wide text-gray-500 line-through'>
              € {price}
            </p>
          </div>
        </div>
      </Link>
      <div className='absolute bottom-[8.9rem] left-[0.8rem] right-[0.8rem]'>
        <AddButton
          onClick={onClick}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          inCartQuantity={inCartQuantity}
          isDisabled={!inStock}
          size='sm'
        />
      </div>
    </div>
  );
};
