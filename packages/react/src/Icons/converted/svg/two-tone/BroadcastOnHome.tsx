import type { SVGProps } from "react";

const SvgBroadcastOnHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 11h3v7H4z" opacity={0.3} />
    <path d="M20 8.59c.73.29 1.4.69 2 1.17V6c0-1.1-.9-2-2-2H4v2h16zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1m-1 9H4v-7h3zM17 14.75c-.69 0-1.25.56-1.25 1.25 0 .4.2.75.5.97V22h1.5v-5.03c.3-.23.5-.57.5-.97 0-.69-.56-1.25-1.25-1.25" />
    <path d="M17 12c-2.21 0-4 1.79-4 4 0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 1 1 19.5 16c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4" />
    <path d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5" />
  </svg>
);

export { SvgBroadcastOnHome };
