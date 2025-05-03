import { FC } from 'react'
import { LuX } from 'react-icons/lu'
import { QuantityControl } from '../product-card/add-button/QuantityControl'

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  onRemove: (id: string) => void
  onIncrement: (id: string) => void
  onDecrement: (id: string) => void
}

export const CartItem: FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  onRemove,
  onIncrement,
  onDecrement
}) => {
  return (
    <div className="flex items-center justify-between p-[1.6rem] rounded-xl bg-white">
      <div className="flex items-center gap-4">
        <div className="w-[80px] h-[80px] bg-light-gray rounded-lg"></div>
        <div>
          <h3 className="!text-[1.8rem]">{name}</h3>
          <div className="mt-2">
            <QuantityControl
              quantity={quantity}
              onIncrement={() => onIncrement(id)}
              onDecrement={() => onDecrement(id)}
              className="!relative !bottom-0 !right-0 !w-[120px]"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <p className="font-secondary font-medium !text-[1.8rem]">€ {(price * quantity).toFixed(2)}</p>
        <button
          onClick={() => onRemove(id)}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Remove item"
        >
          <LuX size={24} />
        </button>
      </div>
    </div>
  )
}
