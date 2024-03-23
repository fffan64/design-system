import type { SVGProps } from "react";

const SvgDirectionsBus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4m5.66 2.99H6.34C6.89 4.46 8.31 4 12 4s5.11.46 5.66.99m.34 2V10H6V6.99zm-.34 9.74-.29.27H6.63l-.29-.27A.97.97 0 0 1 6 16v-4h12v4c0 .37-.21.62-.34.73" />
    <circle cx={8.5} cy={14.5} r={1.5} />
    <circle cx={15.5} cy={14.5} r={1.5} />
  </svg>
);

export { SvgDirectionsBus };
