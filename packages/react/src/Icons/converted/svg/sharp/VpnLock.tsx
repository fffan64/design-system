import type { SVGProps } from "react";

const SvgVpnLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 13c0 2.08-.8 3.97-2.1 5.39V17H14v-4H7v-2h3V8h4V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03c.04.33.08.66.08 1m-9 7.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v3h2zM22 4v-.36c0-1.31-.94-2.5-2.24-2.63A2.5 2.5 0 0 0 17 3.5V4h-1v6h7V4zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
  </svg>
);

export { SvgVpnLock };
