import { FC } from "react"
import { IconShoppingCart } from "@tabler/icons-react"

interface CartCounterProps {
  totalItems: number
  onClick: VoidFunction
}

export const CartCounter: FC<CartCounterProps> = ({ totalItems, onClick }) => {
  return (
	<button className="relative pr-[1rem]" onClick={onClick}>
		<IconShoppingCart size={26}/>
		{totalItems > 0 && <p className="absolute top-[-0.8rem] right-0 bg-coral rounded-full w-[1.8rem] h-[1.8rem] flex items-center justify-center !text-[1rem] !text-white font-bold">{totalItems}</p>}
	</button>
  )
}

