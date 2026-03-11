type SiteMarkProps = {
  className?: string;
};

export function SiteMark({ className }: SiteMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="20" className="fill-primary" />
      <rect
        x="10"
        y="12"
        width="44"
        height="40"
        rx="14"
        className="fill-background"
      />
      <path
        d="M19 24H31"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M19 31H27"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M36 22L43 28L49 20"
        stroke="#C8734D"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="22" r="3" fill="#C8734D" />
      <circle cx="43" cy="28" r="3" fill="#D8A55A" />
      <circle cx="49" cy="20" r="3" fill="#C8734D" />
      <path
        d="M21 42L28 35L33 39L43 30"
        className="stroke-primary"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="42" r="3" className="fill-primary" />
      <circle cx="28" cy="35" r="3" fill="#D8A55A" />
      <circle cx="33" cy="39" r="3" className="fill-primary" />
      <circle cx="43" cy="30" r="3" fill="#D8A55A" />
    </svg>
  );
}
