import type { SVGProps } from "react";

const SvgFilterListOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 7c0-.55-.45-1-1-1H8.83l2 2H20c.55 0 1-.45 1-1m-3 5c0-.55-.45-1-1-1h-3.17l2 2H17c.55 0 1-.45 1-1m-4.02 4.81c.01.06.02.13.02.19 0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.06 0 .13.01.19.02L10.17 13H7c-.55 0-1-.45-1-1s.45-1 1-1h1.17l-3-3H4a1.003 1.003 0 0 1-.62-1.79L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97a.996.996 0 1 1-1.41 1.41z" />
  </svg>
);

export { SvgFilterListOff };
