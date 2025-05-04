import { FC } from "react"
import { FaArrowLeft } from "react-icons/fa6"
import { Button } from "@/components/button/Button"

interface CartHeaderProps {
  title: string
  info?: string
  link?: {
    href: string
    label: string
  }
}

export const CartHeader: FC<CartHeaderProps> = ({ link, title, info }) => {
  return (
    <div className="flex items-center justify-between mb-[3.2rem]">
      <div className="flex items-end gap-[2.4rem]">
        <h1 className="!mb-0">{title}</h1>
        {info && (
          <p className="text-blue font-medium !text-[1.8rem] pb-[0.6rem]">
            {info}
          </p>
        )}
      </div>
      {link && (
      <Button
        variant="secondary"
        to={link.href}
        preFix={<FaArrowLeft />}
      >
        {link.label}
      </Button>
      )}
    </div>
  )
}
