import { FC } from 'react';

interface PriceProps {
  price: string;
}

export const Price: FC<PriceProps> = ({ price }) => {
  return (
    <span className='inline-block rounded-[0.6rem] bg-gradient-to-br from-yellow-200 to-yellow-300 px-[1.2rem] py-[0.3rem]'>
      <p className='font-secondary font-bold'>
        € <span className='!text-[1.8rem]'>{price}</span>
      </p>
    </span>
  );
};
