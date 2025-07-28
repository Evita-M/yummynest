import { FC } from 'react';
import { IconType } from 'react-icons/lib';
import { clsx } from 'clsx';

interface BadgeProps {
  text: string;
  icon?: IconType;
  bgColor?: string;
  color?: string;
  className?: string;
  'data-testid'?: string;
}

export const Badge: FC<BadgeProps> = ({
  text,
  icon,
  bgColor = 'bg-brown',
  color = 'text-white',
  className,
  'data-testid': testId,
}) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-[0.8rem] rounded-[0.6rem] px-[1.2rem] pb-[0.3rem] pt-[0.4rem]',
        bgColor,
        className
      )}
      data-testid={testId}
    >
      {icon && <span className={clsx(color, 'mt-[-0.1rem]')}>{icon({})}</span>}
      <p className={clsx('font-medium tracking-wide', color)}>{text}</p>
    </div>
  );
};
