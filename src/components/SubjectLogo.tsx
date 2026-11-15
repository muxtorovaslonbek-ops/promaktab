export function SubjectLogo({
  subjectId,
  className = "h-14 w-14",
}: {
  subjectId: string;
  className?: string;
}) {
  switch (subjectId) {
    case "matematika":
      return (
        <svg
          viewBox="0 0 64 64"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="matBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#matBg)" />
          <rect
            x="6"
            y="6"
            width="52"
            height="52"
            rx="12"
            stroke="#a7f3d0"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          {/* Right triangle */}
          <path
            d="M15 48L44 48L15 20Z"
            fill="#ffffff"
            fillOpacity="0.18"
            stroke="#ecfdf5"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Right angle marker */}
          <path d="M15 41H22V48" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" />
          {/* Pi symbol */}
          <path
            d="M33 21H50M37.5 21V34C37.5 35.5 36.5 36.5 35.5 36.5M45.5 21V33C45.5 35 46.5 36.5 48.5 36.5"
            stroke="#fde68a"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Coordinate dots */}
          <circle cx="15" cy="20" r="2.5" fill="#fde68a" />
          <circle cx="44" cy="48" r="2.5" fill="#fde68a" />
        </svg>
      );

    case "kimyo":
      return (
        <svg
          viewBox="0 0 64 64"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="kimBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#kimBg)" />
          <rect
            x="6"
            y="6"
            width="52"
            height="52"
            rx="12"
            stroke="#a5f3fc"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          {/* Erlenmeyer flask */}
          <path
            d="M25 14H39M27 14V24L16.5 43.5C15.1 46.1 17 49 20 49H44C47 49 48.9 46.1 47.5 43.5L37 24V14"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Liquid inside flask */}
          <path
            d="M21 37H43L46.4 43.4C47.3 45.1 46.1 47 44.1 47H19.9C17.9 47 16.7 45.1 17.6 43.4L21 37Z"
            fill="#fde047"
            fillOpacity="0.88"
          />
          {/* Bubbles */}
          <circle cx="28" cy="42" r="2.2" fill="#0e7490" />
          <circle cx="36" cy="40" r="1.8" fill="#0e7490" />
          <circle cx="32" cy="31" r="2" fill="#ecfeff" />
          <circle cx="37" cy="27" r="1.4" fill="#a5f3fc" />
          {/* Benzene corner accent */}
          <polygon
            points="48,14 52.5,16.6 52.5,21.8 48,24.4 43.5,21.8 43.5,16.6"
            stroke="#fde047"
            strokeWidth="1.7"
            fill="none"
          />
        </svg>
      );

    case "fizika":
      return (
        <svg
          viewBox="0 0 64 64"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fizBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#fizBg)" />
          <rect
            x="6"
            y="6"
            width="52"
            height="52"
            rx="12"
            stroke="#bfdbfe"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          {/* Atomic orbits */}
          <ellipse
            cx="32"
            cy="32"
            rx="20"
            ry="8.5"
            transform="rotate(30 32 32)"
            stroke="#e0f2fe"
            strokeWidth="2.2"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="20"
            ry="8.5"
            transform="rotate(-30 32 32)"
            stroke="#e0f2fe"
            strokeWidth="2.2"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="20"
            ry="8.5"
            transform="rotate(90 32 32)"
            stroke="#93c5fd"
            strokeWidth="2"
          />
          {/* Nucleus */}
          <circle cx="32" cy="32" r="4.5" fill="#fde047" />
          {/* Orbiting electrons */}
          <circle cx="48" cy="23" r="2.5" fill="#fde047" />
          <circle cx="16" cy="23" r="2.5" fill="#38bdf8" />
          <circle cx="32" cy="52" r="2.5" fill="#ffffff" />
        </svg>
      );

    case "biologiya":
      return (
        <svg
          viewBox="0 0 64 64"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bioBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#bioBg)" />
          <rect
            x="6"
            y="6"
            width="52"
            height="52"
            rx="12"
            stroke="#99f6e4"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          {/* DNA Double Helix */}
          <path
            d="M21 14C21 23 43 23 43 32C43 41 21 41 21 50"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M43 14C43 23 21 23 21 32C21 41 43 41 43 50"
            stroke="#bef264"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Base pair rungs */}
          <line
            x1="23"
            y1="18"
            x2="41"
            y2="18"
            stroke="#fde047"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="25"
            y1="25"
            x2="39"
            y2="25"
            stroke="#fde047"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="25"
            y1="39"
            x2="39"
            y2="39"
            stroke="#fde047"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="23"
            y1="46"
            x2="41"
            y2="46"
            stroke="#fde047"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Leaf accent */}
          <path d="M44 45C49 45 52 41 52 36C47 36 44 40 44 45Z" fill="#bef264" />
        </svg>
      );

    case "tarix":
    default:
      return (
        <svg
          viewBox="0 0 64 64"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="tarBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#tarBg)" />
          <rect
            x="6"
            y="6"
            width="52"
            height="52"
            rx="12"
            stroke="#fde68a"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          {/* Classical / Registon inspired dome & portal */}
          <path
            d="M22 24C22 17 26.5 13 32 11C37.5 13 42 17 42 24H22Z"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect
            x="16"
            y="24"
            width="32"
            height="23"
            rx="2"
            fill="#ffffff"
            fillOpacity="0.18"
            stroke="#ffffff"
            strokeWidth="2.2"
          />
          {/* Pointed arch portal */}
          <path
            d="M26 47V34C26 30.5 29 28.5 32 27C35 28.5 38 30.5 38 34V47"
            fill="#fef3c7"
            stroke="#ffffff"
            strokeWidth="2"
          />
          {/* Minaret / Column accents */}
          <line
            x1="12"
            y1="47"
            x2="52"
            y2="47"
            stroke="#fde68a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="20.5"
            y1="28"
            x2="20.5"
            y2="42"
            stroke="#fde68a"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="43.5"
            y1="28"
            x2="43.5"
            y2="42"
            stroke="#fde68a"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
