import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: string;
  className?: string;
}

export const PageContainer: FC<PageContainerProps> = ({
  children,
  className,
  maxWidth = '1220px',
}) => {
  return (
    <div
      className={clsx(
        'mx-auto w-full flex-grow px-[1.2rem] py-[3.2rem]',
        className,
        `max-w-[${maxWidth}]`
      )}
    >
      {children}
    </div>
  );
};
