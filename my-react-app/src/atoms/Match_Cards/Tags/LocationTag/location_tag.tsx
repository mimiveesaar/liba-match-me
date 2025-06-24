type LocationTagProps = {
  location: string;
  className?: string;
};

export function LocationTag({ location, className = "" }: LocationTagProps) {
  return (
    <span className={`w-77 h-17 inline-block bg-ivory text-black text-xs font-medium px-3 rounded-custom_4 ${className}`}>
      📍 {location}
    </span>
  );
}