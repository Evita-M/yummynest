import { FC } from "react"
import { AddButton } from "@/components/product-card/add-button"

interface ProductPricingProps {
  price: string
  offerPrice: string
  inStock: boolean
  onIncrement: VoidFunction
  onDecrement: VoidFunction
  inCartQuantity: number
  onClick: VoidFunction
}

export const ProductPricing: FC<ProductPricingProps> = ({ price, offerPrice, inStock, onIncrement, onDecrement, inCartQuantity, onClick }) => {
  return (
    <div className="bg-white p-[2.4rem] rounded-[1.2rem]">
      <p className="text-blue mb-[2rem] font-medium">
        Orginal Price: <span className="line-through">€ {price}</span>
      </p>
      <div className="flex items-center justify-between w-full">
        <p className="!text-5xl font-secondary font-medium whitespace-nowrap flex-1/2">€ {offerPrice}</p>
        <AddButton onClick={onClick} inCartQuantity={inCartQuantity} onIncrement={onIncrement} onDecrement={onDecrement} isDisabled={!inStock} label={inStock ? "Add to Cart" : "Out of Stock"} className="flex-1/2" />
      </div>
    </div>
  )
}

