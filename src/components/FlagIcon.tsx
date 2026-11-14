import { useId, type SVGProps } from "react";

interface FlagIconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  code: string;
  title?: string;
}

export function FlagIcon({ code, className = "", title, ...props }: FlagIconProps) {
  const uid = useId();
  const normalized = code.toLowerCase();
  const sharedProps: SVGProps<SVGSVGElement> = {
    viewBox: "0 0 60 40",
    xmlns: "http://www.w3.org/2000/svg",
    className: `shrink-0 overflow-hidden ${className}`.trim(),
    role: title ? "img" : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    ...props,
  };

  switch (normalized) {
    case "gb": {
      const clipId = `gb-clip-${uid}`;
      return (
        <svg {...sharedProps}>
          <clipPath id={clipId}>
            <rect width="60" height="40" />
          </clipPath>
          <g clipPath={`url(#${clipId})`}>
            <rect width="60" height="40" fill="#012169" />
            <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
            <path d="M0,0 L30,20 M60,40 L30,20" stroke="#C8102E" strokeWidth="4" />
            <path d="M60,0 L30,20 M0,40 L30,20" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="12" />
            <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
          </g>
        </svg>
      );
    }

    case "ru":
      return (
        <svg {...sharedProps}>
          <rect width="60" height="13.34" y="0" fill="#FFFFFF" />
          <rect width="60" height="13.34" y="13.33" fill="#0039A6" />
          <rect width="60" height="13.34" y="26.66" fill="#D52B1E" />
        </svg>
      );

    case "kr":
      return (
        <svg {...sharedProps}>
          <rect width="60" height="40" fill="#FFFFFF" />
          {/* Taegeuk */}
          <g transform="translate(30 20) rotate(-33.7)">
            <path d="M-9,0 A9,9 0 0,1 9,0 Z" fill="#CD2E3A" />
            <path d="M-9,0 A9,9 0 0,0 9,0 Z" fill="#0047A0" />
            <circle cx="-4.5" cy="0" r="4.5" fill="#CD2E3A" />
            <circle cx="4.5" cy="0" r="4.5" fill="#0047A0" />
          </g>
          {/* Geon (top-left) */}
          <g transform="translate(13 9) rotate(-33.7)" fill="#111111">
            <rect x="-5" y="-3.2" width="10" height="1.5" />
            <rect x="-5" y="-0.75" width="10" height="1.5" />
            <rect x="-5" y="1.7" width="10" height="1.5" />
          </g>
          {/* Gon (bottom-right) */}
          <g transform="translate(47 31) rotate(-33.7)" fill="#111111">
            <rect x="-5" y="-3.2" width="4.4" height="1.5" />
            <rect x="0.6" y="-3.2" width="4.4" height="1.5" />
            <rect x="-5" y="-0.75" width="4.4" height="1.5" />
            <rect x="0.6" y="-0.75" width="4.4" height="1.5" />
            <rect x="-5" y="1.7" width="4.4" height="1.5" />
            <rect x="0.6" y="1.7" width="4.4" height="1.5" />
          </g>
          {/* Gam (top-right) */}
          <g transform="translate(47 9) rotate(33.7)" fill="#111111">
            <rect x="-5" y="-3.2" width="4.4" height="1.5" />
            <rect x="0.6" y="-3.2" width="4.4" height="1.5" />
            <rect x="-5" y="-0.75" width="10" height="1.5" />
            <rect x="-5" y="1.7" width="4.4" height="1.5" />
            <rect x="0.6" y="1.7" width="4.4" height="1.5" />
          </g>
          {/* Ri (bottom-left) */}
          <g transform="translate(13 31) rotate(33.7)" fill="#111111">
            <rect x="-5" y="-3.2" width="10" height="1.5" />
            <rect x="-5" y="-0.75" width="4.4" height="1.5" />
            <rect x="0.6" y="-0.75" width="4.4" height="1.5" />
            <rect x="-5" y="1.7" width="10" height="1.5" />
          </g>
        </svg>
      );

    case "de":
      return (
        <svg {...sharedProps}>
          <rect width="60" height="13.34" y="0" fill="#111111" />
          <rect width="60" height="13.34" y="13.33" fill="#DD0000" />
          <rect width="60" height="13.34" y="26.66" fill="#FFCE00" />
        </svg>
      );

    case "tr":
      return (
        <svg {...sharedProps}>
          <rect width="60" height="40" fill="#E30A17" />
          <circle cx="24" cy="20" r="9.5" fill="#FFFFFF" />
          <circle cx="26.6" cy="20" r="7.6" fill="#E30A17" />
          <polygon
            points="39,20 35.1,21.2 35.2,25.3 32.8,22 28.9,23.2 31.3,20 28.9,16.8 32.8,18 35.2,14.7 35.1,18.8"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "fr":
      return (
        <svg {...sharedProps}>
          <rect width="20" height="40" x="0" fill="#002395" />
          <rect width="20" height="40" x="20" fill="#FFFFFF" />
          <rect width="20" height="40" x="40" fill="#ED2939" />
        </svg>
      );

    case "sa":
      return (
        <svg {...sharedProps}>
          <rect width="60" height="40" fill="#006C35" />
          {/* Stylized Shahada calligraphy */}
          <g
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13,13.5 V18.5 M17,12 V18.5 M21,14.5 C21,18 24,18.5 26,16.5 V12.5 M29,12.5 V18.5 C31.5,18.5 33,17 34,15.5 M37.5,12.5 V18.5 M41,15.5 C43,14 45.5,14 47,16.5 V18.5" />
            <path d="M15,21.5 H23 M28,21.5 H35 M39,21.5 H46" strokeWidth="1.4" />
          </g>
          {/* White sword */}
          <path d="M14,28 H43 L46,27 L43,26 H14 Z" fill="#FFFFFF" />
          <rect x="43.5" y="24.5" width="1.8" height="5" rx="0.7" fill="#FFFFFF" />
        </svg>
      );

    case "cn":
      return (
        <svg {...sharedProps}>
          <rect width="60" height="40" fill="#DE2910" />
          <polygon
            points="12,6 13.7,11.1 19.1,11.1 14.7,14.3 16.4,19.4 12,16.2 7.6,19.4 9.3,14.3 4.9,11.1 10.3,11.1"
            fill="#FFDE00"
          />
          <polygon
            transform="translate(23 7) rotate(23) scale(0.34)"
            points="0,-6 1.7,-1.1 6.8,-1.1 2.7,1.9 4.2,6.8 0,3.8 -4.2,6.8 -2.7,1.9 -6.8,-1.1 -1.7,-1.1"
            fill="#FFDE00"
          />
          <polygon
            transform="translate(27 11.5) rotate(45) scale(0.34)"
            points="0,-6 1.7,-1.1 6.8,-1.1 2.7,1.9 4.2,6.8 0,3.8 -4.2,6.8 -2.7,1.9 -6.8,-1.1 -1.7,-1.1"
            fill="#FFDE00"
          />
          <polygon
            transform="translate(27 17.5) rotate(12) scale(0.34)"
            points="0,-6 1.7,-1.1 6.8,-1.1 2.7,1.9 4.2,6.8 0,3.8 -4.2,6.8 -2.7,1.9 -6.8,-1.1 -1.7,-1.1"
            fill="#FFDE00"
          />
          <polygon
            transform="translate(23 22) rotate(32) scale(0.34)"
            points="0,-6 1.7,-1.1 6.8,-1.1 2.7,1.9 4.2,6.8 0,3.8 -4.2,6.8 -2.7,1.9 -6.8,-1.1 -1.7,-1.1"
            fill="#FFDE00"
          />
        </svg>
      );

    case "jp":
      return (
        <svg {...sharedProps}>
          <rect width="60" height="40" fill="#FFFFFF" />
          <circle cx="30" cy="20" r="11" fill="#BC002D" />
        </svg>
      );

    default:
      return (
        <svg {...sharedProps}>
          <rect width="60" height="40" fill="#E2E8F0" />
        </svg>
      );
  }
}
