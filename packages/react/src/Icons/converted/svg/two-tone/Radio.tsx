import type { SVGProps } from "react";

const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 13H4v7h16zM8 18.98a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5"
      opacity={0.3}
    />
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8zM4 8h16v3h-2V9h-2v2H4zm0 5h16v7H4z" />
    <circle cx={8} cy={16.48} r={2.5} />
  </svg>
);

export { SvgRadio };
