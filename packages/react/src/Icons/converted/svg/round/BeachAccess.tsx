import type { SVGProps } from "react";

const SvgBeachAccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m13.13 14.56 1.43-1.43 5.73 5.73c.39.39.39 1.03 0 1.43-.39.39-1.03.39-1.43 0zm4.29-5.73 1.27-1.27c.89-.89.77-2.43-.31-3.08a10.1 10.1 0 0 0-12.4 1.47c3.93-1.3 8.31-.25 11.44 2.88M5.95 5.98c-3.36 3.37-3.85 8.51-1.48 12.4.66 1.08 2.19 1.21 3.08.31l1.27-1.27C5.7 14.29 4.65 9.91 5.95 5.98m.02-.02-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3" />
  </svg>
);

export { SvgBeachAccess };
