import type { SVGProps } from "react";

const SvgBattery3Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 4v18H7V4h3V2h4v2zm-2 2H9v8h6z" />
  </svg>
);

export { SvgBattery3Bar };
