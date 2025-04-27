import { FC } from "react"
import { PageContainer } from "../page-container/PageContainer"
import { NavLinkItem } from "./NavLink"
import { Link } from "react-router-dom"
import { CartCounter } from "../cart-counter/CartCounter"
import { useAppSelector } from "../../app/store"
import { selectCartTotalItems } from "../../features/cart/cartSlice"

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Recipes',
    href: '/recipes',
  },
  {
    label: 'Products',
    href: '/products',
  },
]

export const Navbar: FC = () => {
const totalItems = useAppSelector(selectCartTotalItems)

  return (
    <PageContainer>
      <div className="flex items-center justify-between w-full gap-4">
        <Link to="/" className="font-secondary font-bold text-[18px]">Yummy<span className="text-coral">Nest</span>
	  </Link>
		<div className="flex items-center gap-12">
			<ul className="flex items-center gap-12">
			{navLinks.map((link) => (
				<li key={link.href}>
					<NavLinkItem label={link.label} href={link.href} />
					</li>
				))}
			</ul>
			<CartCounter totalItems={totalItems} href="/cart" />
		</div>
	</div>
  </PageContainer>
  )
}

