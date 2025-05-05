import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'default' | 'sm' | 'lg';
type ButtonIcon = ReactElement;

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  preFix?: ButtonIcon;
  postFix?: ButtonIcon;
  className?: string;
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: never;
}

type LinkButtonProps = BaseButtonProps & Omit<LinkProps, 'className'> & {
  to: string;
}

type Props = ButtonProps | LinkButtonProps;

const Button = ({ className = '', variant = 'primary', size = 'default', to, preFix, postFix, children, ...props }: Props) => {
  const baseStyles = 'border-[2px] cursor-pointer inline-flex tracking-wide items-center justify-center rounded-[0.8rem] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:shadow-hover transition-all duration-300'
;

  const variantStyles = {
    primary: 'bg-[var(--color-brown)] border-[var(--color-brown)] text-[var(--color-white)] hover:bg-brown-dark',
    secondary: 'bg-[var(--color-blue)] border-[var(--color-blue)] text-[var(--color-white)] hover:bg-blue-dark',
    tertiary: 'bg-[var(--color-light-green)] border-[var(--color-light-green)] text-[var(--color-black)] hover:bg-light-green-dark',
  };

  const sizeStyles = {
    default: 'px-[2.4rem] h-[4.0rem] pt-[0.8rem] pb-[0.7rem]',
    sm: 'px-[1.6rem] h-[3.2rem] pt-[0.6rem] pb-[0.5rem] !text-[1.4rem]',
    lg: 'px-[3.2rem] h-[4.8rem] pt-[1.2rem] pb-[1.1rem]',
  };

  const buttonClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${(preFix || postFix) ? 'gap-[1.2rem]' : ''}`;

  if (to) {
    const { to: _, ...linkProps } = props as LinkProps;
    return (
      <Link
        to={to}
        className={buttonClassName}
        {...linkProps}
      >
        {preFix && <span>{preFix}</span>}
        {children}
        {postFix && <span>{postFix}</span>}
      </Link>
    );
  }

  return (
    <button
      className={buttonClassName}
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {preFix && <span>{preFix}</span>}
      {children}
      {postFix && <span>{postFix}</span>}
    </button>
  );
};

export { Button };
