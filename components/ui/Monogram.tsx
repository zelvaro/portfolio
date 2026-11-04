// Personal monogram used in the navbar and the stack orbit
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#6D28D9] to-[#B57BFF] font-display font-bold text-white ${className}`}
    >
      SE
    </span>
  );
}
