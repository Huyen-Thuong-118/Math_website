/** Hình đồ thị cực trị + tích phân cho panel trái trang auth (thuần trang trí). */
export function AuthIllustration() {
  return (
    <svg aria-hidden viewBox="0 0 400 260" className="mx-auto w-full max-w-sm">
      <g stroke="rgb(27 42 74 / 14%)" strokeDasharray="4 4">
        <line x1="40" y1="170" x2="360" y2="170" />
        <line x1="200" y1="20" x2="200" y2="240" />
      </g>
      <path
        d="M40 200 C 100 200, 130 40, 200 40 C 270 40, 290 200, 360 210 L360 170 L40 170 Z"
        fill="rgb(27 42 74 / 6%)"
      />
      <path
        d="M40 200 C 100 200, 130 40, 200 40 C 270 40, 290 200, 360 210"
        fill="none"
        stroke="#1b2a4a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="200" cy="40" r="6" fill="#1b2a4a" />
      <circle cx="200" cy="40" r="14" fill="none" stroke="rgb(27 42 74 / 25%)" />
      <rect x="62" y="30" width="72" height="26" rx="13" fill="#fff" />
      <text x="98" y="48" textAnchor="middle" fontSize="12" fill="#1b2a4a">f′(x) = 0</text>
      <rect x="262" y="198" width="80" height="26" rx="13" fill="#fff" />
      <text x="302" y="216" textAnchor="middle" fontSize="12" fill="#1b2a4a">∫ f(x)dx</text>
    </svg>
  );
}
