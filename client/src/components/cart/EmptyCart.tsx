import { FC } from "react"
import { Link } from "react-router-dom"

interface EmptyCartProps {
  href: string
  title: string
  subTitle: string
  label: string
}

export const EmptyCart: FC<EmptyCartProps> = ({href, label, title, subTitle}) => {
  return (
    <div className="text-center">
      <h1 className="mb-4">{title}</h1>
      <p className="text-gray-500 mb-6">{subTitle}</p>
      <Link
        to={href}
        className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
      >
        {label}
      </Link>
    </div>
  )
}
