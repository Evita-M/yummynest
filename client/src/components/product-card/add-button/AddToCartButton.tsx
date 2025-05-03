import { FC } from 'react'
import clsx from 'clsx'
import { LuPlus } from "react-icons/lu";
import { Button } from '../../button/Button';

interface AddToCartButtonProps {
  onClick: (e: React.MouseEvent) => void
  label?: string
  isDisabled: boolean
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  onClick,
  label,
  isDisabled
}) => {
  return label ? (
    <Button onClick={onClick} className="w-full" disabled={isDisabled}>
      {label}
    </Button>
  ) : (
    <button
      className={clsx(
        'w-[3.2rem] h-[3.2rem]',
        'bg-brown rounded-[0.8rem]',
        'flex items-center justify-center',
        'text-white',
        !isDisabled && [
          'hover:bg-brown-dark',
          'active:bg-brown-darker'
        ],
        isDisabled && [
          'opacity-70',
          'cursor-not-allowed'
        ]
      )}
      onClick={onClick}
      aria-label="Add to cart"
      disabled={isDisabled}
    >
      <LuPlus size={24} />
    </button>
  )
}
