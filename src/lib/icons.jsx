

export function Search({ size = 20, strokeWidth = 1.8, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Heart({ size = 20, strokeWidth = 1.8, fill = "none", stroke = "currentColor", ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export function ShoppingBag({ size = 20, strokeWidth = 1.8, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export function User({ size = 20, strokeWidth = 1.8, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function ChevronDown({ size = 12, strokeWidth = 2.5, className, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronUp({ size = 12, strokeWidth = 2.5, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export function ChevronLeft({ size = 10, strokeWidth = 2.5, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight({ size = 10, strokeWidth = 2.5, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Check({ size = 12, strokeWidth = 2.5, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Menu({ size = 22, strokeWidth = 2, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function X({ size = 22, strokeWidth = 2, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Instagram({ size = 20, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedIn({ size = 20, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function PaymentIcon({ label }) {
  switch (label) {
    case "Google Pay":
      return (
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Pay" role="img">
          <rect width="50" height="30" rx="4" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
          <text x="6" y="20" fontSize="11" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">G</text>
          <text x="16" y="20" fontSize="11" fill="white" fontFamily="Arial, sans-serif">Pay</text>
        </svg>
      );
    case "Mastercard":
      return (
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard" role="img">
          <rect width="50" height="30" rx="4" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
          <circle cx="18" cy="15" r="8" fill="#EB001B" opacity="0.95"/>
          <circle cx="32" cy="15" r="8" fill="#F79E1B" opacity="0.95"/>
          <path d="M25 8.8a8 8 0 010 12.4A8 8 0 0125 8.8z" fill="#FF5F00"/>
        </svg>
      );
    case "PayPal":
      return (
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PayPal" role="img">
          <rect width="50" height="30" rx="4" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
          <text x="5" y="20" fontSize="11" fill="#009cde" fontFamily="Arial, sans-serif" fontWeight="bold">Pay</text>
          <text x="26" y="20" fontSize="11" fill="#003087" fontFamily="Arial, sans-serif" fontWeight="bold">Pal</text>
        </svg>
      );
    case "American Express":
      return (
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="American Express" role="img">
          <rect width="50" height="30" rx="4" fill="#2557D6" stroke="#444" strokeWidth="1"/>
          <text x="5" y="20" fontSize="10" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">AMEX</text>
        </svg>
      );
    case "Apple Pay":
      return (
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Apple Pay" role="img">
          <rect width="50" height="30" rx="4" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
          <path d="M18 7c.6-.7 1.2-1.2 2.1-1.1-.1.9-.6 1.8-1.2 2.4-.6.6-1.2 1-2.1.9-.1-.9.4-1.7 1.2-2.2zm-1.2 3.5c-1 0-2 .6-2.5.6s-1.3-.6-2.2-.6c-1.6 0-3.2.9-3.2 4.1 0 2.6 1.8 5.5 3.2 5.5.7 0 1.3-.5 2-.5.8 0 1.3.5 2.1.5 1.5 0 2.4-1.6 3.1-3.1-.8-.4-1.7-1.2-1.7-2.7 0-1.3.9-2.1 1.5-2.4-.7-.9-1.5-1.4-2.3-1.4z" fill="white" transform="scale(0.9) translate(5, 0)"/>
          <text x="27" y="20" fontSize="10" fill="white" fontFamily="Arial, sans-serif">Pay</text>
        </svg>
      );
    case "Samsung Pay":
      return (
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Samsung Pay" role="img">
          <rect width="50" height="30" rx="4" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
          <text x="4" y="20" fontSize="9" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">S Pay</text>
        </svg>
      );
    default:
      return null;
  }
}
