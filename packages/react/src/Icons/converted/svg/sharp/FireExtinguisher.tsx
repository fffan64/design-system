import type { SVGProps } from "react";

const SvgFireExtinguisher = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 19h10v3H7zm0-1h10v-5H7zM17 3v6l-3.15-.66c-.01 0-.01.01-.02.02 1.55.62 2.72 1.98 3.07 3.64H7.1c.34-1.66 1.52-3.02 3.07-3.64-.33-.26-.6-.58-.8-.95L5 6.5v-1l4.37-.91C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66zm-4 3c-.03-.59-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1" />
  </svg>
);

export { SvgFireExtinguisher };
