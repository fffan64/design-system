import type { SVGProps } from "react";

const SvgLeakAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 21h3v-3c-1.66 0-3 1.34-3 3M3 14c6.08 0 11-4.93 11-11h-2a9 9 0 0 1-9 9zm11 7h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7M3 10c3.87 0 7-3.13 7-7H8c0 2.76-2.24 5-5 5zm7 11h2a9 9 0 0 1 9-9v-2c-6.07 0-11 4.93-11 11M3 3v3c1.66 0 3-1.34 3-3z" />
  </svg>
);

export { SvgLeakAdd };
