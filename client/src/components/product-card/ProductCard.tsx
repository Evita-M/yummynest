import { FC } from "react"
import { AddButton } from "./add-button"
import { Price } from "../price/Price"
import { Link } from "react-router-dom"
import vegetableImg from "@/assets/images/vegetable.png"
import clsx from "clsx"
import { Badge } from "../badge/Badge"

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
    <div className="flex flex-col w-full relative group bg-white rounded-[1.2rem] hover:shadow-hover transition-all duration-300">
      {!inStock && <Badge text="Sold out" bgColor='bg-blue-light' color='text-blue' className="absolute top-[1.2rem] right-[1.2rem]"/>}
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
