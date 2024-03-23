import type { SVGProps } from "react";

const SvgRememberMe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 1H5v22h14zm-2 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10z" />
    <circle cx={12} cy={10} r={3} />
  </svg>
);

export { SvgRememberMe };
