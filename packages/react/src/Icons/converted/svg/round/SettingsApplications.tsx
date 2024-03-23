import type { SVGProps } from "react";

const SvgSettingsApplications = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={12} cy={12} r={2} />
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.25 9c0 .22-.03.42-.06.63l.84.73c.18.16.22.42.1.63l-.59 1.02c-.12.21-.37.3-.59.22l-1.06-.36q-.48.405-1.08.63l-.22 1.09c-.05.23-.25.4-.49.4h-1.18c-.24 0-.44-.17-.49-.4l-.22-1.09q-.6-.225-1.08-.63l-1.06.36a.496.496 0 0 1-.59-.22l-.59-1.02a.5.5 0 0 1 .1-.63l.84-.73c-.05-.21-.08-.41-.08-.63s.03-.42.06-.63l-.84-.73a.5.5 0 0 1-.1-.63l.59-1.02c.12-.21.37-.3.59-.22l1.06.36q.48-.405 1.08-.63l.22-1.09c.06-.24.26-.41.5-.41h1.18c.24 0 .44.17.49.4l.22 1.09q.6.225 1.08.63l1.06-.36c.23-.08.47.02.59.22l.59 1.02c.12.21.08.47-.1.63l-.84.73c.04.22.07.42.07.64" />
  </svg>
);

export { SvgSettingsApplications };
