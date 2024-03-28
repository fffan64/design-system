import type { SVGProps } from "react";

const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 5h14v14H5z" opacity={0.3} />
    <path d="M3 3v18h18V3zm16 16H5V5h14z" />
  </svg>
);

export { SvgSquare };