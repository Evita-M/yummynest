import { FC } from "react"
import { PageContainer } from "../page-container/PageContainer"
import { NavLinkItem } from "./NavLink"
import { Link } from "react-router-dom"

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Recipes',
    href: '/recipes',
  },
]

export const Navbar: FC = () => {
  return <PageContainer>
    <div className="flex items-center justify-between w-full gap-4 py-12">
      <Link to="/" className="font-secondary font-bold text-[18px]">Yummy<span className="text-coral">Nest</span></Link>
		<ul className="flex items-center gap-12">
		{navLinks.map((link) => (
		<li key={link.href}>
			<NavLinkItem label={link.label} href={link.href} />
		</li>
		))}
		</ul>
    </div>
  </PageContainer>
}

