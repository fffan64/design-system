import type { SVGProps } from "react";

const SvgWc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M.01 0h24v24h-24z" />
    <path d="M5.5 21v-6.5H5c-.55 0-1-.45-1-1V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v4.5c0 .55-.45 1-1 1h-.5V21c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1M18 21v-5h1.61c.68 0 1.16-.67.95-1.32l-2.1-6.31A2.01 2.01 0 0 0 16.56 7h-.12a2 2 0 0 0-1.9 1.37l-2.1 6.31c-.22.65.26 1.32.95 1.32H15v5c0 .55.45 1 1 1h1c.55 0 1-.45 1-1M7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2" />
  </svg>
);

export { SvgWc };
