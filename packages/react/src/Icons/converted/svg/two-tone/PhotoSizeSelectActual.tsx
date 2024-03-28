import type { SVGProps } from "react";

const SvgPhotoSizeSelectActual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M3.08 5 3 5.08V19h17.92c.03-.02.06-.06.08-.08V5.08L20.92 5zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z"
      opacity={0.3}
    />
    <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2m0 15.92c-.02.03-.06.06-.08.08H3V5.08L3.08 5h17.83c.03.02.06.06.08.08v13.84zm-10-3.41L8.5 12.5 5 17h14l-4.5-6z" />
  </svg>
);

export { SvgPhotoSizeSelectActual };
