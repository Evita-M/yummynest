import { FC } from "react"
import { Rating } from "../../components/rating/Rating"
import { List } from "../../components/list/List"
import { ProductPricing } from "../product-pricing/ProductPricing"

interface ProductDetailProps {
  name: string
  price: number
  offerPrice: number
  description: string[]
  inStock: boolean
}

export const ProductDetail: FC<ProductDetailProps> = ({
  name,
  price,
  offerPrice,
  description
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <div className="flex items-center gap-2">
        <Rating rating={4} />
        <span className="text-gray-500">37 reviews</span>
      </div>
      <ProductPricing
        price={price.toFixed(2)}
        offerPrice={offerPrice.toFixed(2)}
      />
      <List items={description} />
    </div>
  )
}

