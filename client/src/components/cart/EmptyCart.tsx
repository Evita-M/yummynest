import { FC } from 'react';
import { Button } from '../button/Button';
import emptyCart from '@/assets/images/empty-cart.svg';

interface EmptyCartProps {
  href: string;
  title: string;
  subTitle: string;
  label: string;
}

export const EmptyCart: FC<EmptyCartProps> = ({
  href,
  label,
  title,
  subTitle,
}) => (
  <div className='flex h-full flex-col items-center justify-center'>
    <span className='mb-[3.2rem]'>
      <img src={emptyCart} alt='Empty cart' className='h-[100px] w-[100px]' />
    </span>
    <h1>{title}</h1>
    <p className='mb-[3.2rem] text-gray-500'>{subTitle}</p>
    <Button to={href}>{label}</Button>
  </div>
);
