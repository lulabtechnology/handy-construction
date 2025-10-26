import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none px-5 py-2",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand.light focus-visible:ring-brand",
        outline: "border border-slate-300 text-slate-800 hover:bg-slate-50",
        ghost: "text-brand hover:bg-slate-100"
      }
    },
    defaultVariants: { variant: "default" }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <button ref={ref} className={buttonVariants({ variant, className })} {...props} />
  )
);
Button.displayName = "Button";
