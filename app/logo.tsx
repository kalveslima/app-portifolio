export default function Logo({ className = "" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M30 30 L50 20 L70 30 L70 50 L50 60 L30 50 Z" />
        <path d="M50 20 L50 40 L70 50" />
        <path d="M30 50 L50 40" />
      </svg>
    )
  }
  
  