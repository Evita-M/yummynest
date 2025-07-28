import { FC } from 'react';
import { Button } from './ui';

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
  <div
    className='flex h-full flex-col items-center justify-center'
    data-testid='empty-cart'
  >
    <span className='mb-[3.2rem]'>
      <img
        src='/images/empty-cart.svg'
        alt='Empty cart'
        className='h-[100px] w-[100px]'
      />
    </span>
    <h1>{title}</h1>
    <p className='mb-[3.2rem] text-gray-500'>{subTitle}</p>
    <Button to={href} data-testid='continue-shopping-empty'>
      {label}
    </Button>
  </div>
);
