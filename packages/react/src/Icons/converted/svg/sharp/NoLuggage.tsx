import type { SVGProps } from "react";

const SvgNoLuggage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.75 9v.92l1.75 1.75V9H16v4.17l3 3V6h-4V2H9v4h-.17l3 3zM10.5 3.5h3V6h-3zm10.69 17.69L2.81 2.81 1.39 4.22 5 7.83V21h2v1h2v-1h6v1h2v-1h1.17l1.61 1.61zM8 18v-7.17l1.5 1.5V18zm3.25 0v-3.92l1.5 1.5V18z" />
  </svg>
);

export { SvgNoLuggage };
