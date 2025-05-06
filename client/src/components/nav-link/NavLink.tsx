import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkItemProps {
  label: string;
  href: string;
}

export const NavLinkItem: FC<NavLinkItemProps> = ({ label, href }) => (
  <NavLink to={href} className='font-primary text-3xl tracking-wide'>
    {label}
  </NavLink>
);
