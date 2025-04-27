import { FC } from 'react'
import { AddToCartButton } from './AddToCartButton'
import { QuantityControl } from './QuantityControl'

interface AddButtonProps {
  onClick: VoidFunction
  onIncrement?: VoidFunction
  onDecrement?: VoidFunction
  className?: string
  inCart: boolean
  inCartQuantity: number
}

export const AddButton: FC<AddButtonProps> = ({
  onClick,
  onIncrement,
  onDecrement,
  inCart,
  inCartQuantity,
  className
}) => {
  if (!inCart) {
    return <AddToCartButton onClick={onClick} className={className} />
  }

  return (
    <QuantityControl
      quantity={inCartQuantity}
      onIncrement={onIncrement!}
      onDecrement={onDecrement!}
      className={className}
    />
  )
}
