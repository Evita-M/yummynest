import { FC } from 'react';
import { LuTrash } from 'react-icons/lu';
import { QuantityControl } from '../product-card/add-button/QuantityControl';
import vegetableImg from '@/assets/images/vegetable.png';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onRemove: (id: string) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onClick: VoidFunction;
}

export const CartItem: FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  onRemove,
  onIncrement,
  onDecrement,
  onClick,
}) => {
  return (
    <div
      className='hover:shadow-hover flex cursor-pointer items-center justify-between rounded-[1.2rem] bg-white p-[1.6rem] transition-all duration-300'
      onClick={onClick}
    >
      <div className='flex items-center gap-[2.0rem]'>
        <div className='border-orange-light border-3 flex h-[100px] w-[100px] items-center justify-center rounded-[1.2rem]'>
          <img src={vegetableImg} alt={name} width={80} height='auto' />
        </div>
        <div>
          <h3 className='!mb-0 !text-[2rem]'>{name}</h3>
        </div>
      </div>
      <div className='flex items-center gap-[3.2rem]'>
        <QuantityControl
          quantity={quantity}
          onIncrement={() => onIncrement(id)}
          onDecrement={() => onDecrement(id)}
          className='!relative !bottom-0 !right-0 !w-[120px]'
          size='sm'
        />
        <p className='font-secondary w-[80px] text-right !text-[1.8rem] font-medium'>
          € {(price * quantity).toFixed(2)}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
          className='text-gray-600 hover:text-gray-800'
          aria-label='Remove item'
        >
          <LuTrash size={20} />
        </button>
      </div>
    </div>
  );
};
