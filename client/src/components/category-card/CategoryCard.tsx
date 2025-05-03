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
  <a className="cursor-pointer flex flex-col items-center justify-center gap-[1.2rem]">
    <span className="p-4 flex flex-col items-center justify-center bg-blue-light rounded-[50%] w-[140px] h-[140px] shadow-soft hover:shadow-hover transition-default" onClick={onClick}>
      <img src={imgUrl} alt={name} width={IMAGE_SIZE} height={IMAGE_SIZE}  />
    </span>
    <h3 className="!m-0 !text-[1.8rem]">{name}</h3>
  </a>
  )
}

