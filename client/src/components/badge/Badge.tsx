import { FC, ReactNode } from "react"

interface BadgeProps {
text:string
icon?:ReactNode
color?:string
bgColor?:string
}

export const Badge:FC<BadgeProps> = ({text, icon, color = "text-coral", bgColor = "bg-white"}) => {
  return (
    <div className={`inline-flex items-center space-x-1 rounded-[0.6rem] px-6 py-1 ${bgColor} ${color}`}>
        <p className="text-sm text-coral font-medium tracking-wide">{text}</p>
        {icon}
    </div>

  )
}

