import * as React from "react";

type Variant = "default" | "outline" | "ghost";
type Size = "sm" | "md";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";
const variants: Record<Variant, string> = {
  default: "bg-brand text-white hover:bg-brand.light focus-visible:ring-brand",
  outline: "border border-slate-300 text-slate-800 hover:bg-slate-50",
  ghost: "text-brand hover:bg-slate-100",
};
const sizes: Record<Size, string> = {
  sm: "px-4 py-2",
  md: "px-5 py-2.5",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
