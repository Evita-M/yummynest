import { FC } from 'react';
import { BreadCrumbLink } from './BreadCrumbLink';
import { clsx } from 'clsx';

export interface BreadCrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumbsProps {
  items: BreadCrumbItem[];
  className?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ items, className }) => {
  const isLastItem = (index: number) => index === items.length - 1;
  return (
    <nav className={clsx('flex items-center text-sm', className)}>
      {items.map((item, index) => (
        <div key={index} className='flex items-center'>
          {item.href ? (
            <>
              <BreadCrumbLink
                label={item.label}
                href={item.href}
                disabled={isLastItem(index)}
              />
              {!isLastItem(index) && (
                <span className='mx-2 text-gray-400'>/</span>
              )}
            </>
          ) : (
            <span className='capitalize text-gray-700'>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};
