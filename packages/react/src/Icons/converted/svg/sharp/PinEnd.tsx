import type { SVGProps } from "react";

const SvgPinEnd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 12V6H4v12h10v2H2V4h20v8zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-4.34-6H9v5.66l2.12-2.12 2.83 2.83 1.41-1.41-2.83-2.83z" />
  </svg>
);

export { SvgPinEnd };
