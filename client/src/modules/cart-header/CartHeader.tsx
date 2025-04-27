import { FC } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"

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
          <p className="text-green-700 font-medium !text-[1.8rem] pb-[0.6rem]">
            {info}
          </p>
        )}
      </div>
      {link && (
      <Link
        to={link.href}
        className="flex items-center gap-[0.8rem] text-green-600 hover:text-green-700"
      >
        <FaArrowLeft />
          {link.label}
        </Link>
      )}
    </div>
  )
}
