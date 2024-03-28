import type { SVGProps } from "react";

const SvgHlsOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M17.83 15h1.67c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2.04c.1.29.38.5.71.5.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2.04a.75.75 0 0 0-.71-.5c-.12 0-.24.03-.34.08zm1.24 6.9a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92L6.58 9.4c-.05.11-.08.23-.08.35V11h-2V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-3.42l2 2V14c0 .55.45 1 1 1h1.17z" />
  </svg>
);

export { SvgHlsOff };
