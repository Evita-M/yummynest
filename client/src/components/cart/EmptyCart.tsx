import { FC } from "react"
import { Button } from "../button/Button"
import emptyCart from "@/assets/images/empty-cart.svg"

interface EmptyCartProps {
  href: string
  title: string
  subTitle: string
  label: string
}

export const EmptyCart: FC<EmptyCartProps> = ({
  href,
  label,
  title,
  subTitle,
}) => (
  <div className="flex flex-col items-center justify-center h-full">
    <span className="mb-[3.2rem]">
      <img src={emptyCart} alt="Empty cart" className="w-[100px] h-[100px]" />
    </span>
    <h1>{title}</h1>
    <p className="text-gray-500 mb-[3.2rem]">{subTitle}</p>
    <Button
      to={href}
    >
      {label}
    </Button>
  </div>
)

