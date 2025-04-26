import { IconPlus } from '@tabler/icons-react'
import { FC } from 'react'
import clsx from 'clsx'

interface AddButtonProps {
  onClick: VoidFunction
  className?: string
}

export const AddButton: FC<AddButtonProps> = ({ onClick, className }) => {
  return (
    <button
      className={clsx(
        'absolute bottom-[0.8rem] right-[0.8rem]',
        'cursor-pointer text-white flex items-center justify-center',
        'bg-coral w-[3.2rem] h-[3.2rem]',
        'transition-default rounded-full shadow-soft',
        'hover:shadow-hover hover:bg-orange-600',
        className
      )}
      aria-label="Add to cart"
      onClick={onClick}
    >
      <IconPlus color="white" />
    </button>
  )
}
