import { FC } from "react"
import { AddButton } from "./AddButton"


interface ProductCardProps {
  name: string,
  price: number,
  offerPrice: number,
  onClick: VoidFunction
  onIncrement: VoidFunction
  onDecrement: VoidFunction
  inCart: boolean
  inCartQuantity: number
}

export const ProductCard: FC<ProductCardProps> = ({ name, price, offerPrice ,onClick, onIncrement, onDecrement, inCart, inCartQuantity}) => {
  return (
    <div className="flex flex-col">
      <span className="p-4 flex flex-col bg-light-gray rounded-lg w-[200px] h-[200px] relative">
        <AddButton onClick={onClick} onIncrement={onIncrement} onDecrement={onDecrement} inCart={inCart} inCartQuantity={inCartQuantity} />
      </span>
      <h3 className="font-secondary !my-[0.8rem] !text-[1.8rem]">
        {name}
      </h3>
      <div className="flex items-end gap-[0.8rem] tracking-wide">
        <span className="inline-block rounded-[0.4rem] bg-[#FFD95F] px-[0.8rem]">
          <p className="font-secondary font-bold">
            <span className="!text-[1.8rem]">{offerPrice.toFixed(2)}</span> EUR
          </p>
        </span>
        <p className="line-through !text-[1.4rem] !text-gray">{price.toFixed(2)} EUR</p>
      </div>
    </div>
  )
}

