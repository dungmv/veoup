import { cn } from "@/lib/utils";
import { useState } from "react";

export function Demo() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-4 bg-card rounded-xl border shadow-sm max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-primary">Tailwind + ReUI Setup</h1>
      <p className="text-muted-foreground text-center">
        This component demonstrates that TailwindCSS and utility functions are working correctly.
      </p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className={cn(
          "px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
      >
        Count is {count}
      </button>
    </div>
  );
}
