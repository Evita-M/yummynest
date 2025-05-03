import { FC } from "react"
import { AddButton } from "./add-button"
import { Price } from "../price/Price"
import { Link } from "react-router-dom"
import vegetableImg from "@/assets/images/vegetable.png"

interface ProductCardProps {
  name: string,
  price: string,
  offerPrice: string,
  onClick: VoidFunction
  onIncrement: VoidFunction
  onDecrement: VoidFunction
  inCart: boolean
  inCartQuantity: number
  href: string
}

export const ProductCard: FC<ProductCardProps> = ({ name, price, offerPrice ,onClick, onIncrement, onDecrement, inCart, inCartQuantity, href}) => {
  return (
    <div className="flex flex-col w-full relative group">
      <Link to={href} className="flex flex-col">
        <span className="p-[2.6rem] flex flex-col items-center justify-center bg-offwhite rounded-[1.2rem] w-full h-[240px] overflow-hidden" >
          <img
            src={vegetableImg}
            width={200}
            height="auto"
            alt={name}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </span>
        <h3 className="font-secondary !my-[0.8rem] !text-[1.8rem] line-clamp-1">
          {name}
        </h3>
       <div className="flex items-end gap-[0.8rem] mt-2">
        <Price price={offerPrice} />
        <p className="line-through !text-[1.4rem] text-gray-500 tracking-wide">€ {price}</p>
      </div>
      </Link>
      <div className="absolute bottom-[8.9rem] left-[0.8rem] right-[0.8rem]">
        <AddButton
          onClick={onClick}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          inCart={inCart}
          inCartQuantity={inCartQuantity}
        />
      </div>
    </div>
  )
}
