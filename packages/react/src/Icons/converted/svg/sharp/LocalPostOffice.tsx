import type { SVGProps } from "react";

const SvgLocalPostOffice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4H2.01v16H22zm-2 4-8 5-8-5V6l8 5 8-5z" />
  </svg>
);

export { SvgLocalPostOffice };
