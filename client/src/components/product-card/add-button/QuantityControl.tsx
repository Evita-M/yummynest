import { FC, ReactNode, MouseEvent } from 'react'
import clsx from 'clsx'
import { LuPlus, LuMinus } from "react-icons/lu";

interface QuantityButtonProps {
  onClick: (e: MouseEvent) => void
  icon: ReactNode
  label: string
  disabled?: boolean
}

const QuantityButton: FC<QuantityButtonProps> = ({ onClick, icon, label, disabled = false }) => (
  <button
    className={clsx(
      'w-[3.2rem] h-[3.2rem] flex items-center justify-center bg-brown',
      disabled ? 'opacity-50 cursor-default' : 'hover:bg-brown-dark'
    )}
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
  >
    {icon}
  </button>
)

interface QuantityControlProps {
  quantity: number
  onIncrement: VoidFunction
  onDecrement: VoidFunction
  className?: string
  maxQuantity?: number
}

export const QuantityControl: FC<QuantityControlProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  className,
  maxQuantity = 10
}) => {
  const isIncrementDisabled = quantity >= maxQuantity

  return (
    <div
      className={clsx(
        'w-full',
        className
      )}
      aria-label="Quantity control"
    >
      <div
        className={clsx(
          'h-[3.2rem] overflow-hidden rounded-[0.8rem]',
          'transition-default',
          'w-full flex items-center'
        )}
      >
        <QuantityButton
          onClick={(e) => {
            e.stopPropagation()
            onDecrement()
          }}
          icon={<LuMinus size={20} className="text-white" />}
          label="Decrease quantity"
        />
        <span
          className="flex-1 min-w-[3.2rem] h-[3.2rem] flex items-center bg-brown-light justify-center font-bold"
        >
          {quantity}
        </span>
        <QuantityButton
          onClick={(e) => {
            e.stopPropagation()
            onIncrement()
          }}
          icon={<LuPlus size={24} className="text-white" />}
          label="Increase quantity"
          disabled={isIncrementDisabled}
        />
      </div>
    </div>
  )
}
