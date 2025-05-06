import { FC } from 'react';
import clsx from 'clsx';
import { LuPlus } from 'react-icons/lu';
import { Button } from '../../button/Button';

interface AddToCartButtonProps {
  onClick: (e: React.MouseEvent) => void;
  label?: string;
  isDisabled: boolean;
  size?: 'sm' | 'default';
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  onClick,
  label,
  isDisabled,
  size = 'default',
}) => {
  return label ? (
    <Button onClick={onClick} className='w-full' disabled={isDisabled}>
      {label}
    </Button>
  ) : (
    <button
      className={clsx(
        'bg-orange rounded-[0.8rem]',
        'flex items-center justify-center',
        'text-white',
        size === 'sm' ? 'h-[3.2rem] w-[3.2rem]' : 'h-[4.0rem] w-[4.0rem]',
        !isDisabled && ['hover:bg-orange-dark', 'active:bg-orange-darker'],
        isDisabled && ['opacity-50', 'cursor-default']
      )}
      onClick={onClick}
      aria-label='Add to cart'
      disabled={isDisabled}
    >
      <LuPlus size={size === 'sm' ? 20 : 24} />
    </button>
  );
};
