import type { SVGProps } from "react";

const SvgMobileFriendly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 1H9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7.01 13.47l-1.92-1.92c-.35-.35-.92-.35-1.27 0s-.35.92 0 1.27l2.47 2.47c.39.39 1.02.39 1.41 0l5.85-5.85c.35-.35.35-.92 0-1.27s-.92-.35-1.27 0z" />
  </svg>
);

export { SvgMobileFriendly };
