import type { SVGProps } from "react";

const SvgMarkUnreadChatAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <circle cx={19} cy={3} r={3} />
    <path d="M7 8c-.55 0-1-.45-1-1s.45-1 1-1h8.03a4.9 4.9 0 0 1-.92-4H4.01a2 2 0 0 0-2 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V6.97C21.16 7.61 20.13 8 19 8zm6 6H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m4-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1" />
  </svg>
);

export { SvgMarkUnreadChatAlt };
