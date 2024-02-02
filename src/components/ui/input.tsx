import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  withFocuseStyles?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, withFocuseStyles, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          {
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2":
              withFocuseStyles,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
