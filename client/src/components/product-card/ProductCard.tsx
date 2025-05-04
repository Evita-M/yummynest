import { FC } from "react"
import { AddButton } from "./add-button"
import { Price } from "../price/Price"
import { Link } from "react-router-dom"
import vegetableImg from "@/assets/images/vegetable.png"
import clsx from "clsx"

interface ProductCardProps {
  name: string,
  price: string,
  offerPrice: string,
  onClick: VoidFunction
  onIncrement: VoidFunction
  onDecrement: VoidFunction
  inCartQuantity: number
  href: string
  inStock: boolean
}

export const ProductCard: FC<ProductCardProps> = ({ name, price, offerPrice ,onClick, onIncrement, onDecrement,inCartQuantity, href, inStock}) => {
  return (
    <div className="flex flex-col w-full relative group bg-white rounded-[1.2rem]">
      {!inStock && <p className="absolute top-[1.2rem] right-[1.2rem] !text-[1.4rem] text-red-400 font-medium tracking-wide py-[0.4rem] px-[0.8rem] rounded-[0.4rem] bg-red-100">Sold out</p>}
      <Link to={href} className="flex flex-col">
        <span className="p-[2.6rem] flex flex-col items-center justify-center rounded-[1.2rem] w-full h-[240px] overflow-hidden" >
          <img
            src={vegetableImg}
            width={200}
            height="auto"
            alt={name}
            className={clsx("transition-transform duration-300 group-hover:scale-105", !inStock && "opacity-50")}
          />
        </span>
       <div className="p-[1.2rem]">
         <h3 className="font-secondary !my-[0.8rem] !text-[1.8rem] line-clamp-1">
           {name}
         </h3>
         <div className="flex items-end gap-[0.8rem] mt-2">
           <Price price={offerPrice} />
           <p className="line-through !text-[1.4rem] text-gray-500 tracking-wide">€ {price}</p>
        </div>
      </div>
      </Link>
      <div className="absolute bottom-[8.9rem] left-[0.8rem] right-[0.8rem]">
        <AddButton
          onClick={onClick}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          inCartQuantity={inCartQuantity}
          isDisabled={!inStock}
          size="sm"
        />
      </div>
    </div>
  )
}
