import { FC } from 'react';
import { AddToCartButton } from './AddToCartButton';
import { QuantityControl } from './QuantityControl';
import clsx from 'clsx';

interface AddButtonProps {
  onClick: VoidFunction;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
  className?: string;
  inCartQuantity: number;
  isDisabled: boolean;
  label?: string;
  size?: 'sm' | 'default';
}

export const AddButton: FC<AddButtonProps> = ({
  onClick,
  onIncrement,
  onDecrement,
  inCartQuantity,
  className,
  label,
  isDisabled,
  size = 'default',
}) => {
  return (
    <div
      className={clsx(
        'flex w-full items-center justify-end gap-[0.8rem]',
        className
      )}
    >
      {inCartQuantity > 0 ? (
        <QuantityControl
          quantity={inCartQuantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          className={className}
          size={size}
        />
      ) : (
        <AddToCartButton
          onClick={onClick}
          label={label}
          isDisabled={isDisabled}
          size={size}
        />
      )}
    </div>
  );
};
