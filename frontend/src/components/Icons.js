import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="489.000000pt"
    height="489.000000pt"
    viewBox="0 0 489.000000 489.000000"
    preserveAspectRatio="xMidYMid meet"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g
      transform="translate(0.000000,489.000000) scale(0.100000,-0.100000)"
      fill="currentColor"
      stroke="none"
    >
      <path d="M1797 4443 c-25 -24 8 -77 41 -66 22 8 35 43 21 59 -12 14 -51 19 -62 7z" />
      <path d="M2674 4403 c-3 -16 -7 -33 -9 -40 -2 -6 -21 -13 -42 -15 -52 -4 -58 -33 -9 -42 20 -4 36 -12 36 -19 0 -7 -10 -70 -22 -142 -23 -137 -21 -172 12 -205 43 -43 155 -46 155 -4 0 15 -6 18 -31 16 -43 -4 -83 13 -93 41 -9 22 28 279 41 292 3 3 25 1 49 -4 69 -16 81 -14 77 12 -3 19 -12 23 -61 31 l-59 8 7 49 c7 48 6 49 -19 49 -20 0 -27 -6 -32 -27z" />
      <path d="M2213 4341 c-23 -11 -48 -29 -55 -40 -19 -30 -28 -26 -28 14 0 31 -3 35 -25 35 -30 0 -29 15 -13 -232 l12 -188 28 0 29 0 -6 93 c-3 50 -8 104 -10 118 -7 44 12 101 44 133 26 26 39 31 93 34 53 3 67 1 90 -18 35 -27 45 -68 54 -217 7 -120 7 -123 30 -123 12 0 25 4 28 9 12 19 -15 276 -34 318 -34 77 -143 106 -237 64z" />
      <path d="M1852 4282 c-10 -7 -1 -50 42 -202 31 -106 58 -195 60 -197 6 -7 46 7 46 15 0 4 -24 93 -53 197 -53 188 -63 207 -95 187z" />
      <path d="M3012 4217 c-51 -19 -98 -62 -122 -112 -32 -65 -26 -158 14 -209 55 -73 144 -110 229 -96 46 8 51 13 38 38 -9 18 -15 19 -44 10 -64 -20 -158 25 -192 93 -16 29 -20 105 -7 112 4 2 75 -24 157 -59 83 -35 155 -64 161 -64 18 0 37 83 29 128 -20 118 -156 200 -263 159z m138 -55 c55 -29 98 -129 72 -169 -9 -14 -272 93 -272 112 0 13 34 46 65 63 31 17 96 14 135 -6z" />
      <path d="M1515 4151 c-51 -23 -102 -66 -120 -102 -14 -25 -13 -29 2 -38 14 -7 25 0 55 34 59 67 146 95 189 62 18 -14 53 -66 48 -71 -2 -2 -29 -16 -59 -31 -148 -74 -188 -133 -146 -213 46 -88 208 -65 265 37 24 44 24 44 40 22 18 -23 51 -20 51 5 0 27 -132 264 -162 289 -36 31 -103 34 -163 6z m210 -181 c33 -63 4 -134 -69 -169 -56 -28 -78 -26 -110 5 -51 52 -26 95 92 157 37 20 68 37 69 37 1 0 9 -13 18 -30z" />
      <path d="M3345 3873 c-110 -155 -117 -167 -99 -180 10 -7 21 -12 25 -11 4 2 38 46 76 98 97 134 152 164 227 125 37 -19 43 -19 56 5 8 16 6 21 -12 31 -37 20 -88 28 -119 19 l-30 -9 21 34 c21 34 21 34 1 44 -11 6 -22 11 -24 11 -2 0 -57 -75 -122 -167z" />
      <path d="M1040 3985 c-25 -14 -85 -62 -134 -108 l-89 -84 188 -199 c103 -109 191 -200 195 -202 3 -1 14 6 24 17 16 18 15 21 -38 79 -31 33 -56 64 -56 68 0 5 31 37 69 71 135 122 155 227 62 326 -58 63 -141 75 -221 32z m139 -40 c70 -36 98 -108 71 -181 -10 -24 -147 -164 -161 -164 -12 0 -184 182 -184 194 0 7 31 41 69 76 97 88 146 106 205 75z" />
      <path d="M3570 3440 c-15 -28 4 -60 35 -60 31 0 50 32 35 60 -6 12 -21 20 -35 20 -14 0 -29 -8 -35 -20z" />
      <path d="M4013 3258 c-139 -56 -253 -106 -253 -112 0 -6 4 -18 10 -26 8 -12 18 -11 72 9 106 39 100 41 130 -41 52 -139 105 -199 190 -213 80 -14 186 49 204 121 13 52 -3 140 -47 252 -24 61 -46 112 -49 111 -3 0 -119 -46 -257 -101z m274 -64 c54 -140 41 -215 -43 -250 -73 -31 -142 -6 -181 63 -25 45 -76 173 -71 178 8 8 253 103 257 99 3 -2 20 -43 38 -90z" />
      <path d="M982 3178 c-7 -7 -12 -20 -12 -29 0 -43 72 -53 78 -11 6 42 -37 69 -66 40z" />
      <path d="M520 2943 c0 -31 7 -60 21 -82 l20 -33 -35 6 c-29 6 -35 4 -41 -14 -4 -12 -5 -23 -3 -25 2 -2 92 -26 201 -53 198 -50 198 -50 207 -29 4 12 5 25 1 29 -3 3 -54 18 -114 32 -59 14 -121 33 -137 41 -41 21 -64 60 -70 119 -4 43 -8 51 -27 54 -21 3 -23 -1 -23 -45z" />
      <path d="M4261 2736 c-11 -13 -9 -21 10 -48 30 -42 39 -146 16 -182 -17 -25 -78 -51 -101 -43 -8 3 -15 35 -20 92 -7 92 -31 156 -65 175 -37 19 -97 12 -130 -16 -66 -56 -62 -185 9 -249 l22 -20 -28 -5 c-21 -4 -29 -11 -29 -25 0 -19 6 -20 105 -18 152 4 224 19 260 55 50 49 54 157 9 244 -27 53 -40 62 -58 40z m-174 -61 c26 -18 46 -101 41 -172 -3 -46 -4 -48 -36 -51 -66 -6 -122 59 -122 141 0 78 61 121 117 82z" />
      <path d="M586 2630 c-87 -26 -140 -100 -140 -195 1 -121 82 -198 211 -199 123 0 207 88 207 218 0 70 -34 146 -65 146 -25 0 -33 -19 -16 -38 19 -23 37 -78 37 -115 0 -71 -71 -157 -129 -157 -21 0 -21 3 -21 175 l0 175 -27 -1 c-16 0 -41 -5 -57 -9z m44 -195 c0 -162 -2 -165 -68 -125 -67 41 -91 129 -54 198 20 38 67 72 100 72 22 0 22 -1 22 -145z" />
      <path d="M3935 2271 c-3 -2 -5 -14 -5 -26 0 -21 7 -22 188 -39 103 -10 196 -19 207 -20 15 -1 21 6 23 27 3 24 0 27 -25 28 -15 0 -108 8 -206 18 -98 9 -180 15 -182 12z" />
      <path d="M4456 2224 c-18 -17 -19 -24 -10 -48 12 -30 74 -13 74 20 0 14 -27 44 -40 44 -5 0 -16 7 -24 16z" />
      <path d="M815 2200 c-3 -5 1 -20 9 -32 24 -34 21 -85 -7 -102 -20 -14 -236 -66 -271 -66 -10 0 -19 19 -27 60 -11 58 -20 68 -46 52 -9 -5 -9 -19 -3 -47 17 -74 14 -83 -31 -90 -34 -6 -40 -10 -37 -28 3 -19 9 -22 50 -20 47 3 47 2 54 -32 6 -35 18 -42 41 -27 9 6 10 17 4 40 -11 37 -23 31 147 67 68 14 132 30 142 35 50 27 64 99 33 165 -16 34 -45 46 -58 25z" />
      <path d="M3917 2103 c-4 -3 -7 -14 -7 -24 0 -14 22 -25 103 -50 174 -53 207 -81 207 -169 0 -75 -53 -140 -114 -140 -17 0 -87 18 -156 40 -126 40 -144 40 -137 1 3 -23 229 -91 301 -91 56 0 61 2 97 40 52 54 70 133 46 199 -9 25 -15 47 -13 49 2 1 15 -3 30 -9 29 -14 31 -13 40 18 7 21 -3 25 -182 82 -197 63 -204 65 -215 54z" />
      <path d="M779 1845 c-132 -66 -163 -94 -175 -154 -15 -72 44 -178 111 -202 41 -15 44 -26 10 -39 -27 -10 -32 -29 -14 -47 8 -8 59 12 188 74 97 46 180 88 184 92 11 11 -2 41 -18 41 -6 0 -60 -23 -119 -51 -119 -56 -166 -63 -217 -33 -61 36 -90 140 -53 192 8 13 74 52 145 88 119 59 129 66 119 84 -6 11 -16 20 -23 19 -7 0 -69 -29 -138 -64z" />
      <path d="M3715 1598 c-48 -37 -74 -128 -37 -128 11 0 23 13 31 35 15 44 51 69 83 60 38 -12 238 -137 238 -149 0 -6 -11 -28 -25 -48 -29 -43 -30 -51 -10 -68 12 -10 20 -4 46 39 18 28 36 51 40 51 4 0 24 -9 43 -21 l35 -20 12 22 c12 24 4 34 -47 65 -18 10 -18 12 0 39 17 25 17 28 1 44 -14 14 -17 14 -25 1 -31 -54 -26 -55 -159 25 -138 83 -176 92 -226 53z" />
      <path d="M1020 1379 c-80 -61 -153 -118 -163 -128 -19 -18 -14 -51 7 -51 15 0 318 231 323 245 2 6 -2 18 -9 27 -12 15 -29 5 -158 -93z" />
      <path d="M3549 1370 c-49 -26 -103 -90 -117 -139 -18 -57 -15 -71 12 -71 20 0 24 6 30 40 7 44 52 102 97 126 37 19 102 18 141 -2 l30 -16 -23 -26 c-13 -15 -68 -73 -123 -129 -111 -113 -111 -114 -32 -152 130 -64 282 20 294 161 5 69 -34 146 -96 191 -56 41 -156 49 -213 17z m247 -135 c28 -68 13 -129 -46 -178 -40 -34 -91 -43 -137 -26 -20 8 -38 19 -40 26 -4 12 183 213 199 213 5 0 16 -16 24 -35z" />
      <path d="M1164 1249 c-97 -109 -124 -150 -124 -188 0 -42 40 -109 83 -141 53 -39 137 -66 149 -48 14 22 9 38 -12 38 -35 0 -86 26 -124 64 -45 46 -50 99 -12 142 l23 28 69 -59 c112 -95 164 -107 220 -51 28 28 34 42 34 76 0 26 -8 56 -22 78 -27 45 -102 92 -145 92 -36 0 -42 10 -18 30 12 10 13 16 4 26 -6 8 -17 14 -24 14 -7 0 -53 -45 -101 -101z m193 -30 c37 -23 63 -65 63 -103 0 -27 -41 -66 -70 -66 -23 0 -97 50 -140 95 l-35 36 33 30 c40 36 98 39 149 8z" />
      <path d="M709 1149 c-9 -18 -7 -25 10 -43 17 -16 25 -18 39 -10 22 14 27 41 12 59 -18 22 -48 18 -61 -6z" />
      <path d="M3271 1137 c-8 -11 4 -37 56 -117 91 -143 99 -194 37 -255 -30 -30 -33 -37 -22 -54 9 -15 16 -17 29 -10 28 14 62 69 69 108 l6 36 19 -32 c22 -37 23 -38 48 -19 17 13 11 25 -93 185 -62 94 -118 171 -125 171 -7 0 -18 -6 -24 -13z" />
      <path d="M1838 870 l-36 -80 -84 40 c-46 22 -105 44 -131 49 -95 17 -169 -19 -208 -104 -36 -78 -14 -167 53 -219 37 -27 234 -126 253 -126 7 0 64 111 127 248 113 242 115 247 94 259 -11 7 -23 12 -26 13 -3 0 -22 -36 -42 -80z m-147 -81 c46 -22 85 -42 87 -44 1 -1 -24 -59 -57 -129 l-60 -126 -69 33 c-102 49 -141 76 -157 107 -19 37 -19 93 0 130 43 84 124 93 256 29z" />
      <path d="M2870 935 c-10 -12 -10 -21 -2 -40 21 -45 77 -23 70 27 -4 28 -48 37 -68 13z" />
    </g>
  </svg>
)

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

