import Link from 'next/link';
import { cn } from '@/lib/cn';

export default function NavLink({
  href,
  className,
  children,
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href as string}
      className={cn('hover:text-brand-300 text-sm', className)}
    >
      {children}
    </Link>
  );
}
