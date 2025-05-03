import { FC } from "react"
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

interface CartCounterProps {
  totalItems: number
  href: string
}

export const CartCounter: FC<CartCounterProps> = ({ totalItems, href }) => {
  return (
	<Link className="relative pr-[1rem]" to={href}>
		<LuShoppingCart size={24}/>
		{totalItems > 0 && <p className="absolute top-[-0.8rem] right-0 bg-blue rounded-full w-[1.8rem] h-[1.8rem] flex items-center justify-center !text-[1rem] !text-white font-bold">{totalItems}</p>}
	</Link>
  )
}

