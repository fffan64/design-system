import type { SVGProps } from "react";

const SvgNotificationsActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5"
      opacity={0.3}
    />
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5zM7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.45 8.45 0 0 1 3.55-6.42m12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.5 8.5 0 0 1 3.54 6.42" />
  </svg>
);

export { SvgNotificationsActive };
