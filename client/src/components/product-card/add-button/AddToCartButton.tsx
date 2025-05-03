import { FC } from 'react'
import clsx from 'clsx'
import { LuPlus } from "react-icons/lu";
import { Button } from '../../button/Button';

interface AddToCartButtonProps {
  onClick: (e: React.MouseEvent) => void
  label?: string
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  onClick,
  label
}) => {
  return label ? (
    <Button onClick={onClick} className="w-full">
      {label}
    </Button>
  ) : (
    <button
      className={clsx(
        'w-[3.2rem] h-[3.2rem]',
        'bg-brown rounded-[0.8rem]',
        'flex items-center justify-center',
        'text-white',
        'hover:bg-brown-dark',
      )}
      onClick={onClick}
      aria-label="Add to cart"
    >
      <LuPlus size={24} />
    </button>
  )
}
