import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outlined';
type ButtonSize = 'default' | 'sm' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: never;
}

interface LinkButtonProps extends BaseButtonProps, Omit<LinkProps, 'className'> {
  to: string;
}

type Props = ButtonProps | LinkButtonProps;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className = '', variant = 'primary', size = 'default', to, ...props }, ref) => {
    const baseStyles = 'border-[2px] cursor-pointer inline-flex items-center justify-center rounded-[0.8rem] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variantStyles = {
      primary: 'bg-[var(--color-brown)] border-[var(--color-brown)] text-[var(--color-white)] hover:bg-brown-dark',
      secondary: 'bg-[var(--color-blue)] border-[var(--color-blue)] text-[var(--color-white)] hover:bg-blue-dark',
      tertiary: 'bg-[var(--color-light-green)] border-[var(--color-light-green)] text-[var(--color-black)] hover:bg-light-green-dark',
      outlined: 'border-[var(--color-brown)] text-[var(--color-brown)] hover:bg-[var(--color-peach)]',
    };

    const sizeStyles = {
      default: 'px-[2.4rem] pt-[0.6rem] pb-[0.5rem]',
      sm: 'px-[1.6rem] pt-[0.4rem] pb-[0.3rem]',
      lg: 'px-[3.2rem] pt-[0.8rem] pb-[0.7rem]',
    };

    const buttonClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (to) {
      const { to: _, ...linkProps } = props as LinkProps;
      return (
        <Link
          to={to}
          className={buttonClassName}
          {...linkProps}
        />
      );
    }

    return (
      <button
        className={buttonClassName}
        ref={ref}
        {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
