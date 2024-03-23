import type { SVGProps } from "react";

const SvgLocalCafe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 5v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5zm4-2H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-2 5V5h2v3zm2 11H2v2h18z" />
  </svg>
);

export { SvgLocalCafe };
