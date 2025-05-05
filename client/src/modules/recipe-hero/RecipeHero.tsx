import { FC } from 'react'
import { Badge } from '@/components/badge/Badge'
import { FaBowlFood } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


interface RecipeHeroProps {
	name?: string
	category?: string
	area?: string
	instructions?: string
	imgUrl?: string
	className?: string
}

export const RecipeHero: FC<RecipeHeroProps> = ({
	name,
	category,
	area,
	instructions,
	imgUrl,
	className,
}) => {
	return (
		<section className={className}>
			<div className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden items-stretch">
				<div className="relative w-full md:w-1/2 h-[16rem] md:h-[24rem]">
					<img
						src={imgUrl}
						alt={name}
						width={600}
						height={600}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="p-4 md:p-6 lg:p-8 w-full md:w-1/2 flex flex-col gap-4">
					<div className="space-y-2">
						<p className="font-secondary tracking-wider text-gray-600">
							Cook This Tonight
						</p>
						<h1>{name}</h1>
						<div className="flex flex-wrap gap-[1.2rem]">
							{category && <Badge text={category} bgColor='bg-orange' icon={FaBowlFood}/>}
							{area && <Badge text={area} icon={FaLocationDot} bgColor='bg-orange'/>}
						</div>
					</div>
					<p className="text-base text-gray-700 line-clamp-3">{instructions}</p>
				</div>
			</div>
		</section>
	)
}
