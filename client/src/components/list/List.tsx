import { FC } from 'react';

interface ListProps {
  items: string[];
}

export const List: FC<ListProps> = ({ items }) => {
  return (
    <ul className='list-none'>
      {items.map((item) => (
        <li
          key={item}
          className="before:bg-blue relative py-[0.4rem] pl-[2rem] before:absolute before:top-1/2 before:left-0 before:h-[0.6rem] before:w-[0.6rem] before:-translate-y-1/2 before:rounded-[0.1rem] before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
