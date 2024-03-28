import type { SVGProps } from "react";

const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M19 5v14H5V5zm-9 13v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4zM8.5 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M18 11l-2.5-4-2.5 4zm-5 2 2.5 4 2.5-4z"
      opacity={0.3}
    />
    <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4zM8.5 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M18 11l-2.5-4-2.5 4zm-5 2 2.5 4 2.5-4z" />
  </svg>
);

export { SvgElevator };
