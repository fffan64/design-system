import type { SVGProps } from "react";

const SvgAddBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4z" />
  </svg>
);

export { SvgAddBox };
