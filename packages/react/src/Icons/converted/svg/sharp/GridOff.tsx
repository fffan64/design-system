import type { SVGProps } from "react";

const SvgGridOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V2H5.11l2 2zm8 0h4v4h-4zM1.41 1.14 0 2.55l2 2V22h17.45l2.01 2.01 1.41-1.41zM10 12.55 11.45 14H10zm-6-6L5.45 8H4zM8 20H4v-4h4zm0-6H4v-4h3.45l.55.55zm6 6h-4v-4h3.45l.55.55zm2 0v-1.45L17.45 20z" />
  </svg>
);

export { SvgGridOff };
