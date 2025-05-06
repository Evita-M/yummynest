import { FC, ReactNode, MouseEvent } from 'react';
import clsx from 'clsx';
import { LuPlus, LuMinus } from 'react-icons/lu';

interface QuantityButtonProps {
  onClick: (e: MouseEvent) => void;
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  size?: 'sm' | 'default';
}

const QuantityButton: FC<QuantityButtonProps> = ({
  onClick,
  icon,
  label,
  disabled = false,
  size = 'default',
}) => (
  <button
    className={clsx(
      'bg-orange flex items-center justify-center',
      size === 'sm' ? 'h-[3.2rem] w-[3.2rem]' : 'h-[4.0rem] w-[4.0rem]',
      disabled ? 'cursor-default opacity-50' : 'hover:bg-orange-dark'
    )}
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
  >
    {icon}
  </button>
);

interface QuantityControlProps {
  quantity: number;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
  className?: string;
  maxQuantity?: number;
  size?: 'sm' | 'default';
}

export const QuantityControl: FC<QuantityControlProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  className,
  maxQuantity = 10,
  size = 'default',
}) => {
  const isIncrementDisabled = quantity >= maxQuantity;

  return (
    <div
      className={clsx(
        'bg-orange-light overflow-hidden rounded-[0.8rem]',
        'flex w-full items-center',
        size === 'sm' ? 'h-[3.2rem]' : 'h-[4.0rem]',
        className
      )}
      aria-label='Quantity control'
    >
      <QuantityButton
        onClick={(e) => {
          e.stopPropagation();
          onDecrement();
        }}
        icon={<LuMinus size={20} className='text-white' />}
        label='Decrease quantity'
        size={size}
      />
      <span
        className={clsx(
          'text-orange-dark flex flex-1 items-center justify-center font-bold',
          size === 'sm' ? 'text-[1.4rem]' : 'text-[1.6rem]'
        )}
      >
        {quantity}
      </span>
      <QuantityButton
        onClick={(e) => {
          e.stopPropagation();
          onIncrement();
        }}
        icon={<LuPlus size={20} className='text-white' />}
        label='Increase quantity'
        disabled={isIncrementDisabled}
        size={size}
      />
    </div>
  );
};
