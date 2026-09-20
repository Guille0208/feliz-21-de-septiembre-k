import { useId } from "react";

const petals = Array.from({ length: 14 }, (_, index) => index);
const bloomPalettes = {
  golden: { start: "#FFDA42", middle: "#F5AE1B", end: "#D97706", centerStart: "#C9891F", centerEnd: "#713A0B", stroke: "#E59A12", ring: "#FFD55A" },
  soft: { start: "#FFE68B", middle: "#F5AE1B", end: "#D97706", centerStart: "#C9891F", centerEnd: "#713A0B", stroke: "#E59A12", ring: "#FFD55A" },
  white: { start: "#FFFDF4", middle: "#F4E9C9", end: "#D9C690", centerStart: "#D5A438", centerEnd: "#765016", stroke: "#CFAE58", ring: "#E8D590" },
  coral: { start: "#FFD5B8", middle: "#F49A67", end: "#C85B3D", centerStart: "#B75B32", centerEnd: "#6F301D", stroke: "#D66E4A", ring: "#F7BE90" },
  rose: { start: "#FFD3DF", middle: "#EF8FAC", end: "#C85178", centerStart: "#B24C67", centerEnd: "#66233C", stroke: "#D56A91", ring: "#F4B6C9" },
  lavender: { start: "#E6D8FF", middle: "#B89BE7", end: "#7B5AB8", centerStart: "#7651A8", centerEnd: "#402760", stroke: "#9A7CD0", ring: "#D2BEF2" },
  sky: { start: "#D5F3FF", middle: "#81CBE8", end: "#3B8CB6", centerStart: "#407EA5", centerEnd: "#1C4B67", stroke: "#69B2D2", ring: "#B9E5F4" },
  mint: { start: "#D8F7D9", middle: "#87D5A1", end: "#3F9A68", centerStart: "#498D63", centerEnd: "#20513B", stroke: "#66B987", ring: "#BFE9C8" },
};

function FloralBloom({ className = "", size = "sm", variant = "golden", withStem = false }) {
  const bloomId = useId().replace(/:/g, "");
  const palette = bloomPalettes[variant] || bloomPalettes.golden;
  const isWhite = variant === "white";
  return (
    <span aria-hidden="true" className={`floral-bloom floral-bloom--${size} ${className}`}>
      <svg viewBox={withStem ? "0 0 100 140" : "0 0 100 100"} fill="none">
        <defs>
          <linearGradient id={`petal-${bloomId}`} x1="32" y1="18" x2="69" y2="69" gradientUnits="userSpaceOnUse">
            <stop stopColor={palette.start} />
            <stop offset="0.55" stopColor={palette.middle} />
            <stop offset="1" stopColor={palette.end} />
          </linearGradient>
          <radialGradient id={`center-${bloomId}`} cx="0" cy="0" r="1" gradientTransform="translate(43 41) rotate(52) scale(26)">
            <stop stopColor={palette.centerStart} />
            <stop offset="1" stopColor={palette.centerEnd} />
          </radialGradient>
        </defs>
        {withStem && <path d="M50 59C51 81 49 104 45 133" stroke="#5B7E37" strokeWidth="4" strokeLinecap="round" />}
        {withStem && <path d="M48 103C36 94 28 96 24 106C35 110 44 110 48 103Z" fill="#7EA34B" />}
        {withStem && <path d="M48 115C61 105 70 109 75 119C64 123 54 122 48 115Z" fill="#6B913E" />}
        <g transform="translate(0 0)">
          {petals.map((petal) => (
            <ellipse
              key={petal}
              cx="50"
              cy="25"
              rx="7.5"
              ry="24"
              fill={`url(#petal-${bloomId})`}
              stroke={palette.stroke}
              strokeOpacity={isWhite ? "0.72" : "0.5"}
              strokeWidth={isWhite ? "1.15" : "0.9"}
              transform={`rotate(${petal * (360 / petals.length)} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="18" fill={`url(#center-${bloomId})`} stroke={palette.ring} strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5].map((dot) => <circle key={dot} cx={43 + (dot % 3) * 7} cy={43 + Math.floor(dot / 3) * 8} r="2" fill="#F7C94A" opacity="0.75" />)}
        </g>
      </svg>
    </span>
  );
}

export default FloralBloom;
