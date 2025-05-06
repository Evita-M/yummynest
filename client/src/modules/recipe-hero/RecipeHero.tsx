import { FC } from 'react';
import { Badge } from '@/components/badge/Badge';
import { FaBowlFood } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';

interface RecipeHeroProps {
  name?: string;
  category?: string;
  area?: string;
  instructions?: string;
  imgUrl?: string;
  className?: string;
}

export const RecipeHero: FC<RecipeHeroProps> = ({
  name,
  category,
  area,
  instructions,
  imgUrl,
  className,
}) => {
  return (
    <section className={className}>
      <div className='flex flex-col items-stretch overflow-hidden rounded-[2rem] bg-white md:flex-row'>
        <div className='relative h-[16rem] w-full md:h-[24rem] md:w-1/2'>
          <img
            src={imgUrl}
            alt={name}
            width={600}
            height={600}
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex w-full flex-col gap-4 p-4 md:w-1/2 md:p-6 lg:p-8'>
          <div className='space-y-2'>
            <p className='font-secondary tracking-wider text-gray-600'>
              Cook This Tonight
            </p>
            <h1>{name}</h1>
            <div className='flex flex-wrap gap-[1.2rem]'>
              {category && (
                <Badge text={category} bgColor='bg-orange' icon={FaBowlFood} />
              )}
              {area && (
                <Badge text={area} icon={FaLocationDot} bgColor='bg-orange' />
              )}
            </div>
          </div>
          <p className='line-clamp-3 text-base text-gray-700'>{instructions}</p>
        </div>
      </div>
    </section>
  );
};
