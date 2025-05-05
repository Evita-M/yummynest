import { FC } from 'react'
import { LuTrash } from 'react-icons/lu'
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
    <div
      className="flex items-center justify-between p-[1.6rem] rounded-[1.2rem] bg-white cursor-pointer hover:shadow-hover transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex items-center gap-[2.0rem]">
        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-[1.2rem] border-2 border-brown-light">
          <img
            src={vegetableImg}
            alt={name}
            width={80}
            height="auto"
          />
        </div>
        <div>
          <h3 className="!text-[2rem] !mb-0">{name}</h3>
        </div>
      </div>
      <div className="flex items-center gap-[3.2rem]">
        <QuantityControl
          quantity={quantity}
          onIncrement={() => onIncrement(id)}
          onDecrement={() => onDecrement(id)}
          className="!relative !bottom-0 !right-0 !w-[120px]"
          size="sm"
        />
        <p className="font-secondary font-medium !text-[1.8rem] w-[80px] text-right">
          € {(price * quantity).toFixed(2)}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove(id)
          }}
          className="text-gray-600 hover:text-gray-800"
          aria-label="Remove item"
        >
          <LuTrash size={20} />
        </button>
      </div>
    </div>
  )
}
