import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "completed" | "ongoing" | "gold" | "navy";
  className?: string;
}

const variantStyles = {
  completed: "bg-green-100 text-green-800 border-green-200",
  ongoing: "bg-gold-100 text-gold-800 border-gold-200",
  gold: "bg-gradient-gold text-navy-900 border-transparent",
  navy: "bg-navy-900 text-white border-transparent",
};

export default function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border", variantStyles[variant], className)}>
      {children}
    </span>
  );
}
