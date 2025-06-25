import { Moon, Circle } from 'lucide-react';

export function MoonButton() {
  return (
    <span className="relative inline-flex items-center justify-center w-9 h-9 hover:scale-110 transition-transform cursor-pointer">
      <Circle color="#FFFCF7" size={36} strokeWidth={1} className="absolute" />
      <Moon color="#FFFCF7" strokeWidth={2} className="w-5 h-5 z-10" />
    </span>
  );
}