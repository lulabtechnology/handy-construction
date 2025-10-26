import { PropsWithChildren } from "react";

export function Card({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}
export function CardHeader({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`p-5 border-b border-slate-100 ${className}`}>{children}</div>;
}
export function CardContent({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
