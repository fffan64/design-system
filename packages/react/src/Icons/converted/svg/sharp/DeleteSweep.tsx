import type { SVGProps } from "react";

const SvgDeleteSweep = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 20h10V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z" />
  </svg>
);

export { SvgDeleteSweep };
