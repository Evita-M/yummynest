import { FC } from "react"
import { BreadCrumbLink } from "./BreadCrumbLink";
import { clsx } from "clsx";

interface BreadCrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumbsProps {
  items: BreadCrumbItem[];
  className?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ items, className }) => {
  return (
    <nav className={clsx("flex items-center text-sm", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <>
              <BreadCrumbLink label={item.label} href={item.href} />
              {index < items.length - 1 && <span className="mx-2 text-gray-400">/</span>}
            </>
          ) : (
            <span className="text-gray-700">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
