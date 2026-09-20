function Ornament({ className = "", label = "", variant = "petal" }) {
  return (
    <svg
      aria-hidden={label ? undefined : true}
      aria-label={label || undefined}
      viewBox="0 0 84 32"
      className={`h-8 w-16 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === "sunrise" && <><path d="M3 22h78" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M30 22a12 12 0 0 1 24 0" stroke="currentColor" strokeWidth="1.4"/><path d="M42 5v5M24 13l5 3M60 13l-5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></>}
      {variant === "book" && <><path d="M4 16h17M63 16h17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M24 8c7 0 12 3 18 8-6 5-11 8-18 8V8Zm36 0c-7 0-12 3-18 8 6 5 11 8 18 8V8Z" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="1.3"/><path d="M42 10v12" stroke="currentColor" strokeWidth="1.1"/></>}
      {variant === "sprout" && <><path d="M42 27V13M42 19c-8 0-12-4-14-10 8 0 13 3 14 10ZM42 16c6 0 10-4 12-9-7 0-11 3-12 9Z" fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M19 27h46" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></>}
      {variant === "frame" && <><path d="M21 6H9v9M63 6h12v9M21 26H9v-9M63 26h12v-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="42" cy="16" r="6" fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeWidth="1.3"/><circle cx="42" cy="16" r="2.2" fill="currentColor"/></>}
      {variant === "seal" && <><path d="M14 16h16M54 16h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="42" cy="16" r="11" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeWidth="1.3"/><path d="m42 9 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="currentColor"/></>}
      {variant === "petal" && <><path d="M3 16h21M60 16h21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><path d="M27 16c3-9 8-11 15-13 7 2 12 4 15 13-3 9-8 11-15 13-7-2-12-4-15-13Z" fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeWidth="1.4" /><path d="M42 8v16M34 16h16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" /><circle cx="42" cy="16" r="3" fill="currentColor" /></>}
    </svg>
  );
}

export default Ornament;
