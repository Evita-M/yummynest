import { FC } from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { Link } from 'react-router-dom';

interface CartCounterProps {
  totalItems: number;
  href: string;
}

export const CartCounter: FC<CartCounterProps> = ({ totalItems, href }) => {
  return (
    <Link className='relative pr-[1rem]' to={href}>
      <LuShoppingCart size={24} />
      {totalItems > 0 && (
        <p className='bg-blue absolute right-0 top-[-0.8rem] flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-full !text-[1rem] font-bold !text-white'>
          {totalItems}
        </p>
      )}
    </Link>
  );
};
