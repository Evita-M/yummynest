import { FC } from "react"

interface ListProps {
  items: string[]
}

export const List: FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-none">
      {items.map((item) => (
        <li key={item} className="relative pl-[2rem] py-[0.4rem] before:content-[''] before:w-[0.6rem] before:h-[0.6rem] before:rounded-[0.1rem] before:bg-blue before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
          {item}
        </li>
      ))}
    </ul>
  )
}
