import { FC } from 'react'
import clsx from 'clsx'
import { LuPlus } from "react-icons/lu";

interface AddToCartButtonProps {
  onClick: VoidFunction
  className?: string
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  onClick,
  className
}) => {
  return (
    <button
      className={clsx(
        'absolute bottom-[0.8rem] right-[0.8rem]',
        'w-[3.2rem] h-[3.2rem]',
        'bg-coral rounded-full',
        'flex items-center justify-center',
        'text-white',
        'hover:bg-orange-600 transition-colors cursor-pointer',
        className
      )}
      onClick={onClick}
      aria-label="Add to cart"
    >
      <LuPlus size={24} />
    </button>
  )
}
