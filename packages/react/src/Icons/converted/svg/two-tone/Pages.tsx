import type { SVGProps } from "react";

const SvgPages = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m7 7 4 1V5H5v6h3zm1 6H5v6h6v-3l-4 1zm9 4-4-1v3h6v-6h-3zm-4-9 4-1-1 4h3V5h-6z"
      opacity={0.3}
    />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 5h6v3L7 7l1 4H5zm6 14H5v-6h3l-1 4 4-1zm-1.63-4.37.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63-2.63-.91zM19 19h-6v-3l4 1-1-4h3zm0-8h-3l1-4-4 1V5h6z" />
  </svg>
);

export { SvgPages };
