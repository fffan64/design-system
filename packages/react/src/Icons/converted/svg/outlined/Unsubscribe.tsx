import type { SVGProps } from "react";

const SvgUnsubscribe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20.99 14.04V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10.05c.28 1.92 2.1 3.35 4.18 2.93 1.34-.27 2.43-1.37 2.7-2.71.25-1.24-.16-2.39-.94-3.18m-2-9.04L12 8.5 5 5zm-3.64 10H5V7l7 3.5L19 7v6.05c-.16-.02-.33-.05-.5-.05-1.39 0-2.59.82-3.15 2m5.15 2h-4v-1h4z" />
  </svg>
);

export { SvgUnsubscribe };
