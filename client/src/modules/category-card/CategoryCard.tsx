import { FC } from 'react';

const IMAGE_SIZE = 120;

interface CategoryCardProps {
  id: string;
  imgUrl: string;
  name: string;
  onClick?: VoidFunction;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  name,
  id,
  imgUrl,
  onClick,
}) => {
  return (
    <a className='flex cursor-pointer flex-col items-center justify-center gap-[1.2rem]'>
      <span
        className='bg-blue-light flex h-[140px] w-[140px] flex-col items-center justify-center rounded-[50%] p-4'
        onClick={onClick}
      >
        <img src={imgUrl} alt={name} width={IMAGE_SIZE} height={IMAGE_SIZE} />
      </span>
      <h3 className='!m-0 !text-[1.8rem]'>{name}</h3>
    </a>
  );
};
