import type { SVGProps } from "react";

const SvgCellTower = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m7.9 14.1.09-.09c.27-.27.32-.71.08-1.01C7.36 12.09 7 11.01 7 10c0-1.08.35-2.16 1.04-3.01.25-.3.21-.75-.07-1.02L7.9 5.9c-.34-.34-.9-.3-1.2.08-.91 1.18-1.4 2.6-1.4 4.02s.49 2.84 1.4 4.02c.3.38.86.42 1.2.08M18.51 3.49l-.08.08c-.3.3-.29.76-.03 1.08 1.26 1.53 1.9 3.48 1.9 5.35s-.63 3.81-1.9 5.35c-.28.33-.23.83.08 1.14.35.35.93.31 1.24-.07C21.29 14.54 22 12.31 22 10c0-2.32-.79-4.55-2.31-6.43-.3-.37-.85-.41-1.18-.08" />
    <path d="m5.57 3.57-.08-.08c-.33-.33-.88-.29-1.18.08C2.79 5.45 2 7.68 2 10s.79 4.55 2.31 6.43c.3.37.85.42 1.18.08l.08-.08c.3-.3.29-.76.03-1.08-1.27-1.54-1.9-3.48-1.9-5.35s.63-3.81 1.9-5.35c.26-.32.27-.78-.03-1.08M16.07 14.07c.36.36.95.32 1.26-.09.9-1.18 1.37-2.58 1.37-3.98-.08-1.41-.51-2.83-1.4-4.01a.797.797 0 0 0-1.2-.09l-.08.08c-.27.27-.32.71-.08 1.01.7.92 1.06 2 1.06 3.01 0 1.07-.34 2.13-1.01 2.98-.26.32-.22.79.08 1.09M14.5 10c0-1.6-1.51-2.85-3.18-2.41-.8.21-1.46.85-1.7 1.65-.32 1.06.06 2.04.76 2.64l-2.96 8.87c-.21.62.25 1.25.9 1.25.41 0 .77-.26.9-.65L9.67 20h4.67l.45 1.35a.949.949 0 1 0 1.8-.6l-2.96-8.87c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z" />
  </svg>
);

export { SvgCellTower };
