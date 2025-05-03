import { FC, ReactNode } from "react"
import clsx from "clsx"

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export const PageContainer: FC<PageContainerProps> = ({ children, className }) => {
  return <div className={clsx("max-w-[1220px] mx-auto px-[1.2rem] py-[2.4rem]", className)}>{children}</div>
}

