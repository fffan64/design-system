import type { SVGProps } from "react";

const SvgNoiseAware = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 15h-2a1.003 1.003 0 0 1-1.95.32c-.15-.44-.4-1.08-.93-1.61l-1.36-1.36C9.28 11.87 9 11.19 9 10.5a2.5 2.5 0 0 1 4.95-.5h2.02c-.25-2.25-2.16-4-4.47-4C9.02 6 7 8.02 7 10.5c0 1.22.49 2.41 1.35 3.27l1.36 1.36c.17.17.31.44.44.82A3.01 3.01 0 0 0 13 18c1.65 0 3-1.35 3-3" />
    <circle cx={13.5} cy={12.5} r={1.5} />
    <path d="m3.6 6.58 1.58 1.26c.35-.57.77-1.1 1.24-1.57L4.85 5.02c-.47.47-.88 1-1.25 1.56M9.46 4.42l-.87-1.81c-.63.23-1.24.52-1.8.87l.87 1.81q.84-.54 1.8-.87M4.49 9.26l-1.96-.45c-.21.63-.36 1.28-.44 1.95l1.96.45a8 8 0 0 1 .44-1.95M20.4 6.58a9.4 9.4 0 0 0-1.25-1.56l-1.58 1.26c.48.47.89.99 1.24 1.57zM4.04 12.79l-1.96.45c.08.67.23 1.33.44 1.95l1.97-.45c-.22-.62-.38-1.27-.45-1.95M17.21 3.48q-.855-.525-1.8-.87l-.87 1.81q.96.33 1.8.87zM13 4.07V2.05c-.33-.03-.66-.05-1-.05s-.67.02-1 .05v2.02c.33-.04.66-.07 1-.07s.67.03 1 .07M11 19.93v2.02c.33.03.66.05 1 .05s.67-.02 1-.05v-2.02c-.33.04-.66.07-1 .07s-.67-.03-1-.07M19.51 14.74l1.97.45c.21-.63.36-1.28.44-1.95l-1.96-.45c-.07.68-.23 1.33-.45 1.95M19.96 11.21l1.96-.45a9.7 9.7 0 0 0-.44-1.95l-1.97.45c.22.62.38 1.27.45 1.95M17.58 17.73l1.58 1.26c.47-.48.88-1 1.25-1.56l-1.58-1.26a9.4 9.4 0 0 1-1.25 1.56M6.79 20.52q.855.525 1.8.87l.87-1.81q-.96-.33-1.8-.87zM14.54 19.58l.87 1.81c.63-.23 1.24-.52 1.8-.87l-.87-1.81q-.84.54-1.8.87M3.6 17.42a9.4 9.4 0 0 0 1.25 1.56l1.58-1.26a7.9 7.9 0 0 1-1.24-1.57z" />
  </svg>
);

export { SvgNoiseAware };
