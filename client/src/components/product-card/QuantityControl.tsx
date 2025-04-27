import { FC } from 'react'
import clsx from 'clsx'
import { LuPlus, LuMinus } from "react-icons/lu";

interface QuantityControlProps {
  quantity: number
  onIncrement: VoidFunction
  onDecrement: VoidFunction
  className?: string
}

export const QuantityControl: FC<QuantityControlProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  className
}) => {
  return (
    <div
      className={clsx(
        'absolute bottom-[0.8rem] right-[0.8rem]',
        'transition-all duration-300 ease-in-out',
        'w-[calc(100%-1.6rem)]',
        className
      )}
    >
      <div
        className={clsx(
          'h-[3.2rem] bg-coral overflow-hidden rounded-[0.8rem]',
          'transition-all duration-300 ease-in-out',
          'w-full flex items-center'
        )}
      >
        <button
          className="w-[3.2rem] h-[3.2rem] flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer"
          onClick={onDecrement}
          aria-label="Decrease quantity"
        >
          <LuMinus size={20} className="text-white" />
        </button>
        <span className="flex-1 min-w-[3.2rem] h-[3.2rem] bg-peach flex items-center justify-center text-coral font-bold">
          {quantity}
        </span>
        <button
          className="w-[3.2rem] h-[3.2rem] flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer"
          onClick={onIncrement}
          aria-label="Increase quantity"
        >
          <LuPlus size={24} className="text-white" />
        </button>
      </div>
    </div>
  )
}
