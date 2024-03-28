import type { SVGProps } from "react";

const SvgSignalCellularNoSim = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10.83 5 9.36 6.47 17 14.11V5zM7 9.79V19h9.23z" opacity={0.3} />
    <path d="M10.83 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-7L7.94 5.06l1.42 1.42zm10.43 16.21L3.79 3.74 2.38 5.15 5 7.77V19a2 2 0 0 0 2 2h11.23l1.62 1.62zM7 19V9.79L16.23 19z" />
  </svg>
);

export { SvgSignalCellularNoSim };
