import { FC } from "react"

const IMAGE_SIZE = 120

interface CategoryCardProps {
  id: string,
  imgUrl: string,
  name: string,
  onClick?: VoidFunction
}

export const CategoryCard: FC<CategoryCardProps> = ({ name, id, imgUrl, onClick }) => {
  return (
  <a className="cursor-pointer flex flex-col items-center justify-center">
    <span className="p-4 flex flex-col items-center justify-center bg-sky rounded-[50%] w-[160px] h-[160px] shadow-soft hover:shadow-hover transition-default" onClick={onClick}>
      <img src={imgUrl} alt={name} width={IMAGE_SIZE} height={IMAGE_SIZE}  />
    </span>
    <h3 className="font-secondary mt-[2.4rem]">{name}</h3>
  </a>
  )
}

