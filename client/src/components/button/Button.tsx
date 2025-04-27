import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outlined';
type ButtonSize = 'default' | 'sm' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variantStyles = {
      primary: 'bg-[var(--color-coral)] text-[var(--color-white)] hover:opacity-90',
      secondary: 'bg-[var(--color-sky)] text-[var(--color-black)] hover:opacity-90',
      tertiary: 'bg-[var(--color-light-green)] text-[var(--color-black)] hover:opacity-90',
      outlined: 'border-2 border-[var(--color-coral)] text-[var(--color-coral)] hover:bg-[var(--color-peach)]',
    };

    const sizeStyles = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
    };

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
