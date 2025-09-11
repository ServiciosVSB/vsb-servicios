'use client';
import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/cn';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'ref'> & {
  variant?: 'primary' | 'ghost';
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const styles =
      variant === 'primary'
        ? 'bg-brand-600 hover:bg-brand-500 text-white'
        : 'border border-slate-600 hover:border-brand-400 text-slate-200';

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center h-10 px-4 rounded-lg text-sm transition-colors',
          styles,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
