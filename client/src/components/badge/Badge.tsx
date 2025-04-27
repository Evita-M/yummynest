import { FC } from "react"
import { IconType } from "react-icons/lib"

interface BadgeProps {
	text: string
	icon?: IconType
	bgColor?: string
}

export const Badge: FC<BadgeProps> = ({ text, icon, bgColor = "bg-coral" }) => {
  return (
    <div className={`inline-flex items-center gap-[0.8rem] rounded-[0.6rem] pb-[0.3rem] pt-[0.4rem] px-[1.2rem] ${bgColor}`}>
      {icon && <span className="text-white mt-[-0.1rem]">{icon({})}</span>}
      <p className="tracking-wide text-white">{text}</p>
    </div>
  )
}
