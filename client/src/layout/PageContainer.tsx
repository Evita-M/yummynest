import { FC, ReactNode } from "react"
import clsx from "clsx"

interface PageContainerProps {
  children: ReactNode
  maxWidth?: string
  className?: string
}

export const PageContainer: FC<PageContainerProps> = ({ children, className, maxWidth = "1220px" }) => {
  return <div className={clsx("w-full mx-auto px-[1.2rem] py-[3.2rem] flex-grow", className, `max-w-[${maxWidth}]`)}>{children}</div>
}

