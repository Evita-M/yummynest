import { FC } from 'react'
import { AddToCartButton } from './AddToCartButton'
import { QuantityControl } from './QuantityControl'
import clsx from 'clsx'

interface AddButtonProps {
  onClick: VoidFunction
  onIncrement: VoidFunction
  onDecrement: VoidFunction
  className?: string
  inCart: boolean
  inCartQuantity: number
  label?: string
}

export const AddButton: FC<AddButtonProps> = ({
  onClick,
  onIncrement,
  onDecrement,
  inCart,
  inCartQuantity,
  className,
  label
}) => {

  return (
    <div className={clsx("flex justify-end w-full items-center gap-[0.8rem]", className)}>
      {inCart ? (
        <QuantityControl
          quantity={inCartQuantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          className={className}
        />
      ) : (
        <AddToCartButton onClick={onClick} label={label} />
      )}
    </div>
  )
}
