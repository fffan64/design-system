import type { SVGProps } from "react";

const SvgNoFlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="m13.42 16.24 2.55 2.55-.01 1.21H4v-8.6h3.02l.59-.65.15-.16 1.5 1.5A3.486 3.486 0 0 0 6.5 15.5c0 1.93 1.57 3.5 3.5 3.5 1.68 0 3.07-1.18 3.42-2.76M16 13.17V11.4h-1.77z"
      opacity={0.3}
    />
    <path d="M20.4 5.6H22L19 11V7h-1V2h4zM16 11.4v1.77l2 2V11c0-.88-.72-1.6-1.6-1.6h-2.54L12.58 8h-1.75l3.4 3.4zm1.97 6.57L2.1 2.1.69 3.51l5.66 5.66-.21.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l2.54 2.54 1.41-1.41zM11.5 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5m4.46 4.5H4v-8.6h3.02l.59-.65.15-.16 1.5 1.5A3.486 3.486 0 0 0 6.5 15.5c0 1.93 1.57 3.5 3.5 3.5 1.68 0 3.07-1.18 3.42-2.76l2.55 2.55z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export { SvgNoFlash };
