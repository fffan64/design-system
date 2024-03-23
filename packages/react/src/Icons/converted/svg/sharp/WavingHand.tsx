import type { SVGProps } from "react";

const SvgWavingHand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7zm7.9-3.57L3.42 8.91C.2 12.13.2 17.35 3.42 20.58s8.44 3.22 11.67 0l7.95-7.95-1.77-1.77-5.3 5.3-.71-.71 7.42-7.42-1.77-1.77-6.72 6.72-.71-.71 7.78-7.78-1.76-1.76-7.78 7.78-.7-.71 6.36-6.36-1.77-1.77-8.51 8.51a4 4 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35 4.95-4.95z" />
  </svg>
);

export { SvgWavingHand };
