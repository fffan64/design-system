import type { SVGProps } from "react";

const SvgGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 11h2v2h-2zm6 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM9 18H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zM5 13h2v-2H5V5h14v6h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5zm2-4h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2zm-2 2h2v2H9z" />
  </svg>
);

export { SvgGradient };
