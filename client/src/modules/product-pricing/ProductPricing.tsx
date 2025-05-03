import { FC } from "react"
import { AddButton } from "@/components/product-card/add-button"

interface ProductPricingProps {
  price: string
  offerPrice: string
}

export const ProductPricing: FC<ProductPricingProps> = ({ price, offerPrice }) => {
  return (
    <div className="border-2 border-blue-light p-[1.2rem] rounded-[1.4rem]">
      <p className="text-gray-500 mb-[0.8rem]">
        Orginal Price: <span className="text-gray-500 line-through">€ {price}</span>
      </p>
      <div className="flex items-center justify-between w-full">
        <p className="!text-5xl font-secondary font-medium whitespace-nowrap">€ {offerPrice}</p>
        <AddButton onClick={() => {}} inCart={false} inCartQuantity={0} label="Add to Cart" onIncrement={() => {}} onDecrement={() => {}} className="w-[120px]"/>
      </div>
    </div>
  )
}

