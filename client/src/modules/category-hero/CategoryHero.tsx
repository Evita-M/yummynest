import { FC } from 'react';

interface CategoryHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const CategoryHero: FC<CategoryHeroProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <section className='bg-brown-light relative w-full overflow-hidden rounded-2xl p-10'>
      <div className='flex flex-col items-center justify-between gap-8 py-8 md:flex-row md:py-12'>
        <div className='w-full md:w-1/3'>
          <img
            src={imageUrl}
            alt={title}
            width={400}
            height={400}
            className='object-cover'
          />
        </div>
        <div className='w-full space-y-4 md:w-2/3'>
          <h1>{title}</h1>
          <p className='max-w-[800px]'>{description}</p>
        </div>
      </div>
    </section>
  );
};
