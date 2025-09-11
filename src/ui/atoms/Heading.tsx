import { cn } from '@/lib/cn';

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3';
  display?: boolean;
};
export default function Heading({
  as = 'h2',
  display = false,
  className,
  ...rest
}: Props) {
  const Tag = as as any;
  return (
    <Tag
      className={cn(
        display ? 'font-display' : 'font-sans',
        'text-slate-100',
        className
      )}
      {...rest}
    />
  );
}
