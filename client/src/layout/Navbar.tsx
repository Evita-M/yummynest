import { FC } from 'react';
import { NavLinkItem } from '@/components/nav-link/NavLink';
import { Link } from 'react-router-dom';
import { CartCounter } from '@/components/cart-counter/CartCounter';
import { useAppSelector } from '@/app/store';
import { selectCartTotalItems } from '@/features/cart/cartSlice';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
}

export const Navbar: FC<NavbarProps> = ({ links }) => {
  const totalItems = useAppSelector(selectCartTotalItems);

  return (
    <div className='mx-auto flex w-full max-w-[1220px] items-center justify-between gap-[1.2rem] px-[1.2rem] py-[2.4rem]'>
      <Link to='/' className='font-secondary text-[18px] font-bold'>
        Yummy<span className='text-blue'>Nest</span>
      </Link>
      <div className='flex items-center gap-12'>
        <ul className='flex items-center gap-12'>
          {links.map((link) => (
            <li key={link.href}>
              <NavLinkItem label={link.label} href={link.href} />
            </li>
          ))}
        </ul>
        <CartCounter totalItems={totalItems} href='/cart' />
      </div>
    </div>
  );
};
