import type { SVGProps } from "react";

const SvgCropOriginal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zm-2 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z" />
  </svg>
);

export { SvgCropOriginal };
