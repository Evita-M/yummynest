import { FC } from "react"
import { AddButton } from "./AddButton"


interface ProductCardProps {
  name: string,
  price: number,
  offerPrice: number,
  onClick: VoidFunction
}

export const ProductCard: FC<ProductCardProps> = ({ name, price, offerPrice ,onClick}) => {
  return (
    <div className="flex flex-col">
      <span className="p-4 flex flex-col bg-light-gray rounded-lg w-[200px] h-[200px] relative">
        <AddButton onClick={onClick} />
      </span>
      <h3 className="font-secondary !my-[0.8rem] !text-[1.8rem]">
        {name}
      </h3>
      <div className="flex items-end gap-[0.8rem] tracking-wide">
        <span className="inline-block rounded-[0.8rem] bg-[#FFD95F] px-[1.2rem]">
          <p>
            <span className="!text-[2rem] font-bold">{offerPrice}</span> EUR
          </p>
        </span>
        <p className="line-through !text-[1.4rem] !text-gray">{price} EUR</p>
      </div>
    </div>
  )
}

