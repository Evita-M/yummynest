import { FC } from "react"
import { Link } from "react-router-dom"

interface BreadCrumbLinkProps {
  label: string
  href: string
}

export const BreadCrumbLink: FC<BreadCrumbLinkProps> = ({ label, href }) =>
   (
    <Link to={href} className="text-gray-500 hover:text-gray-700">{label}</Link>
  )

