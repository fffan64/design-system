import type { SVGProps } from "react";

const SvgAppsOutage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6 6h4v-4h-4zm3-20c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m.5 8h-1V7h1zm0-2h-1V2h1zM16 14h4v-2.07c-.33.05-.66.07-1 .07-1.07 0-2.09-.24-3-.68zM10 4v4h2.68c-.44-.91-.68-1.93-.68-3 0-.34.02-.67.07-1z" />
  </svg>
);

export { SvgAppsOutage };
