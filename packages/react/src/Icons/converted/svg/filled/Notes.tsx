import type { SVGProps } from "react";

const SvgNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 18h12v-2H3zM3 6v2h18V6zm0 7h18v-2H3z" />
  </svg>
);

export { SvgNotes };
