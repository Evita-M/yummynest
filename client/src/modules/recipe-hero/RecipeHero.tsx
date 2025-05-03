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
			<div className="flex flex-col md:flex-row  bg-brown-light rounded-[2rem] overflow-hidden items-center">
				<div className="w-full h-[300px] md:h-[40rem] md:flex-[50%] relative">
					<img
						src={imgUrl}
						alt={name}
						width={600}
						height={600}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
				<div className="p-[2.4rem] lg:p-12 w-full lg:flex-[50%] flex flex-col h-full gap-[1.2rem] lg:gap-8">
					<div>
						<p className="text-sm font-secondary tracking-wider pb-2">
							Cook This Tonight
						</p>
						<h1 className="text-3xl lg:text-4xl font-bold !mb-[1.5rem] lg:!mb-[2.2rem]">{name}</h1>
						<div className="flex gap-[1.2rem]">
							{category && <Badge text={category} bgColor='bg-brown' icon={FaBowlFood}/>}
							{area && <Badge text={area} icon={FaLocationDot} bgColor='bg-brown'/>}
						</div>
					</div>
					<p className="mt-[1.2rem] lg:text-lg line-clamp-4">{instructions}</p>
				</div>
			</div>
		</section>
	)
}
