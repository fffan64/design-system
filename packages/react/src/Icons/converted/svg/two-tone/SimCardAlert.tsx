import type { SVGProps } from "react";

const SvgSimCardAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 8.83V20h12V4h-7.17zM11 8h2v5h-2zm0 7h2v2h-2z" opacity={0.3} />
    <path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z" />
    <path d="M11 15h2v2h-2zM11 8h2v5h-2z" />
  </svg>
);

export { SvgSimCardAlert };
