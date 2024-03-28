import type { SVGProps } from "react";

const SvgFolderShared = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m11.17 8-.59-.59L9.17 6H4v12h16V8zM19 16v1h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2m-4-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"
      opacity={0.3}
    />
    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-5-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m-4 3v1h8v-1c0-1.33-2.67-2-4-2s-4 .67-4 2" />
  </svg>
);

export { SvgFolderShared };
