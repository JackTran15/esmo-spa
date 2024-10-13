export const ChevronDownIcon = ({ className = "" }) => {
  return (
    <svg
      className={className || ""}
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 1.5L6.5 6.5L1.5 1.5"
        stroke={className.match(/hover/, "") ? "#a68c75" : "#374151"}
        strokeWidth="1.5" // Changed from stroke-width
        strokeLinecap="round" // Changed from stroke-linecap
        strokeLinejoin="round" // Changed from stroke-linejoin
      />
    </svg>
  );
};
