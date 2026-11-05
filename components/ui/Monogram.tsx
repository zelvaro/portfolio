// Personal monogram used in the navbar and the stack orbit
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#1466B8] to-[#ED1F9E] font-display font-bold text-white ${className}`}
    >
      SE
    </span>
  );
}
