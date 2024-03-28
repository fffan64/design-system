import type { SVGProps } from "react";

const SvgAbc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 11h-1.5v-.5h-2v3h2V13H21v2h-5V9h5zM8 9v6H6.5v-1.5h-2V15H3V9zm-1.5 1.5h-2V12h2zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M11 10.5v.75h2v-.75zm2 2.25h-2v.75h2z" />
  </svg>
);

export { SvgAbc };
