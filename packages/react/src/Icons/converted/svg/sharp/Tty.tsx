import type { SVGProps } from "react";

const SvgTty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 15v6c-3.28 0-6.35-.89-9-2.43A18 18 0 0 1 4.43 12 17.85 17.85 0 0 1 2 3h6l1 5-2.9 2.9c1.43 2.5 3.5 4.57 6 6L15 14zm-6-9h2V4h-2zm-1 3h2V7h-2zm-2-3h2V4h-2zm7 1h-2v2h2zm1-3h-2v2h2zm2 3h-2v2h2zm1-3h-2v2h2zm-8 8h2v-2h-2zm-3 0h2v-2h-2zm8-2h-2v2h2zm3 0h-2v2h2z" />
  </svg>
);

export { SvgTty };
