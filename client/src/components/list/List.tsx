import { FC } from "react"

interface ListProps {
  items: string[]
}

export const List: FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
