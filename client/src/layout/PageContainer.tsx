import { FC, ReactNode } from "react"
import clsx from "clsx"

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export const PageContainer: FC<PageContainerProps> = ({ children, className }) => {
  return <div className={clsx("max-w-[1220px] h-full w-full mx-auto px-[1.2rem] py-[3.2rem]", className)}>{children}</div>
}

