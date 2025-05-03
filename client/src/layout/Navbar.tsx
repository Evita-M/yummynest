import { FC } from "react"
import { NavLinkItem } from "@/components/nav-link/NavLink"
import { Link } from "react-router-dom"
import { CartCounter } from "@/components/cart-counter/CartCounter"
import { useAppSelector } from "@/app/store"
import { selectCartTotalItems } from "@/features/cart/cartSlice"

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  links: NavLink[]
}

export const Navbar: FC<NavbarProps> = ({links}) => {
const totalItems = useAppSelector(selectCartTotalItems)

  return (
      <div className="flex items-center justify-between w-full gap-[1.2rem] max-w-[1220px] px-[1.2rem] py-[2.4rem] mx-auto">
        <Link to="/" className="font-secondary font-bold text-[18px]">Yummy<span className="text-coral">Nest</span>
	  </Link>
		<div className="flex items-center gap-12">
			<ul className="flex items-center gap-12">
			{links.map((link) => (
				<li key={link.href}>
					<NavLinkItem label={link.label} href={link.href} />
					</li>
				))}
			</ul>
			<CartCounter totalItems={totalItems} href="/cart" />
		</div>
	</div>
  )
}

