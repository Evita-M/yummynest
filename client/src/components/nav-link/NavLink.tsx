import { FC } from "react"
import { NavLink } from "react-router-dom"

interface NavLinkItemProps {
  label: string
  href: string
}

export const NavLinkItem: FC<NavLinkItemProps> = ({ label, href }) => (
  <NavLink
    to={href}
    className="tracking-wide text-3xl font-primary"
  >
    {label}
  </NavLink>
)
