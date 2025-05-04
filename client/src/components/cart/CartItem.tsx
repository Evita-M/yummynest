import { FC } from 'react'
import { LuX } from 'react-icons/lu'
import { QuantityControl } from '../product-card/add-button/QuantityControl'
import vegetableImg from '@/assets/images/vegetable.png'

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  onRemove: (id: string) => void
  onIncrement: (id: string) => void
  onDecrement: (id: string) => void
  onClick: VoidFunction
}

export const CartItem: FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  onRemove,
  onIncrement,
  onDecrement,
  onClick
}) => {
  return (
    <div className="flex items-center justify-between p-[1.6rem] rounded-[1.2rem]" onClick={onClick}>
      <div className="flex items-center gap-[3.6rem]">
        <div className="w-[80px] h-[80px] bg-offwhite rounded-[1.2rem]"><img src={vegetableImg} alt={name} width={80} height={80} /></div>
        <div>
          <h3 className="!text-[1.8rem]">{name}</h3>
          <div className="mt-2">
            <QuantityControl
              quantity={quantity}
              onIncrement={() => onIncrement(id)}
              onDecrement={() => onDecrement(id)}
              className="!relative !bottom-0 !right-0 !w-[120px]"
              size="sm"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <p className="font-secondary font-medium !text-[1.8rem]">€ {(price * quantity).toFixed(2)}</p>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove(id)
          }}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Remove item"
        >
          <LuX size={24} />
        </button>
      </div>
    </div>
  )
}
