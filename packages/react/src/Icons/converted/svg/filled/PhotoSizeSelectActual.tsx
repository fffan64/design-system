import type { SVGProps } from "react";

const SvgPhotoSizeSelectActual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M24 24H0V0h24z" />
    <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z" />
  </svg>
);

export { SvgPhotoSizeSelectActual };
