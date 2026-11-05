// Personal monogram used in the navbar and the stack orbit
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#0F3570] to-[#2092E5] font-display font-bold text-white ${className}`}
    >
      SE
    </span>
  );
}
