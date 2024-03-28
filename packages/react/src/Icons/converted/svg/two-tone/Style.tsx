import type { SVGProps } from "react";

const SvgStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15.22 4.75 7.87 7.79l4.96 11.96 7.35-3.05zM11 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
      opacity={0.3}
    />
    <path d="m3.87 11.18-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61l1.34.56zm18.16 4.77L17.07 3.98a2.01 2.01 0 0 0-1.81-1.23c-.26 0-.53.04-.79.15L7.1 5.95a2 2 0 0 0-1.08 2.6l4.96 11.97a2 2 0 0 0 2.6 1.08l7.36-3.05a1.994 1.994 0 0 0 1.09-2.6m-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95z" />
    <circle cx={11} cy={9} r={1} />
    <path d="m9.33 21.75-3.45-8.34v6.34c0 1.1.9 2 2 2z" />
  </svg>
);

export { SvgStyle };
