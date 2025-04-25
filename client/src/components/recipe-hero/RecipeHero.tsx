import { FC } from 'react'
import { Badge } from '../badge/Badge'

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
			<div className="flex max-h-[40rem] bg-peach rounded-[2rem] overflow-hidden items-center">
				<div className="flex-[40%]">
					<img
						src={imgUrl}
						alt={name}
						width={600}
						height={600}
						className="w-full h-auto object-cover"
					/>
				</div>
				<div className="p-12 flex-[60%] flex flex-col gap-8">
					<div>
						<p className="text-sm font-secondary tracking-wider pb-2">
							Cook This Tonight
						</p>
						<h1 className="text-4xl font-bold !mb-[2.2rem]">{name}</h1>
						<div className="flex gap-4">
							{category && <Badge text={category} />}
							{area && <Badge text={area} />}
						</div>
					</div>
					<p className="text-lg line-clamp-4">{instructions}</p>
				</div>
			</div>
		</section>
	)
}
