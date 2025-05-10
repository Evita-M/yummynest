import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface BreadCrumbLinkProps {
  label: string;
  href: string;
  disabled?: boolean;
}

export const BreadCrumbLink: FC<BreadCrumbLinkProps> = ({
  label,
  href,
  disabled,
}) => (
  <Link
    to={href}
    className={clsx(
      'capitalize',
      'text-gray-500 hover:text-gray-700',
      disabled && 'cursor-default'
    )}
  >
    {label}
  </Link>
);
