import type { SVGProps } from "react";

const SvgEventNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 10H7v2h10zm4-7h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zm-5-5H7v2h7z" />
  </svg>
);

export { SvgEventNote };
