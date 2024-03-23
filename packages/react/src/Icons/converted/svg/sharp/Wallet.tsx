import type { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4H2v16h20zm-6.25 10.09L4 11.22V10h16v.53zM4 6h16v2H4z" />
  </svg>
);

export { SvgWallet };
