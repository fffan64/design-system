import type { SVGProps } from "react";

const SvgElectricMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 4c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m2.25 10-3 3-1.5-1.5L11 14.25 9.75 13l3-3 1.5 1.5L13 12.75zM16 9H8V7h8z"
      opacity={0.3}
    />
    <path d="M12 2a9 9 0 0 0-9 9c0 3.92 2.51 7.24 6 8.48V22h2v-2.06a8.3 8.3 0 0 0 2 0V22h2v-2.52c3.49-1.24 6-4.56 6-8.48a9 9 0 0 0-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7" />
    <path d="M8 7h8v2H8zM12.75 10l-3 3L11 14.25 9.75 15.5l1.5 1.5 3-3L13 12.75l1.25-1.25z" />
  </svg>
);

export { SvgElectricMeter };
