import { FC } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface RatingProps {
  rating: number;
}

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className='text-yellow-400' />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalf key='half' className='text-yellow-400' />);
  }
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaStar key={`empty-${i}`} className='text-gray-300' />);
  }
  return stars;
};

export const Rating: FC<RatingProps> = ({ rating }) => (
  <div className='flex items-center gap-[0.4rem]' data-testid='product-rating'>
    {renderStars(rating)}
  </div>
);
