import { FC } from "react"

interface PriceProps {
  price: string
}

export const Price: FC<PriceProps> = ({ price }) => {
  return (
    <span className="inline-block rounded-[0.6rem] bg-yellow-400 py-[0.3rem] px-[1.2rem]">
      <p className="font-secondary font-bold">
        € <span className="!text-[1.8rem]">{price}</span>
      </p>
    </span>
  )
}
