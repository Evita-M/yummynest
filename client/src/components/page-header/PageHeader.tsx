import clsx from 'clsx';
import { FC } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={clsx('flex flex-wrap items-end gap-[1.6rem]', className)}>
      <h1 className='!mb-[0] capitalize'>{title}</h1>
      {description && (
        <p className='text-blue pb-[0.2rem] font-medium'>{description}</p>
      )}
    </div>
  );
};
