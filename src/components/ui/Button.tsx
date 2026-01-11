import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// I'm not using radix-ui/react-slot in this basic version unless I install it, 
// so I'll simplify to just props for now or basic implementation. 
// Actually, I'll stick to a simple button for speed without excessive deps unless requested.
// But standard "shadcn" style is nice. I'll make a robust simple one.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "brand";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        // Variants
        const variants = {
            default: "bg-stone-900 text-stone-50 hover:bg-stone-900/90",
            brand: "bg-[var(--color-primary)] text-stone-900 font-bold hover:brightness-110",
            outline: "border border-stone-200 bg-white hover:bg-stone-100 hover:text-stone-900",
            ghost: "hover:bg-stone-100 hover:text-stone-900",
            link: "text-stone-900 underline-offset-4 hover:underline",
        };

        // Sizes
        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        };

        const compClass = cn(baseStyles, variants[variant], sizes[size], className);

        const Comp = asChild ? Slot : "button";

        return (
            <Comp className={compClass} ref={ref} {...props} />
        );
    }
);
Button.displayName = "Button";

export { Button };
