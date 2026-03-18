import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "brand";
  className?: string;
}) {
  const variants = {
    default: "bg-surface-muted text-text-primary",
    outline: "border border-surface-muted text-text-secondary",
    secondary: "bg-brand/10 text-brand",
    brand: "bg-brand text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
