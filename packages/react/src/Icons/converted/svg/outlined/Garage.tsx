import type { SVGProps } from "react";

const SvgGarage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h16z" />
    <circle cx={9} cy={13} r={1} />
    <circle cx={15} cy={13} r={1} />
    <path d="M5.78 18.5h.44c.43 0 .78-.36.78-.81V16.5h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5c-.82-2.46-1.34-4.03-1.56-4.69-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4-.22.66-.74 2.22-1.56 4.69v6.5c0 .45.35.81.78.81m2.55-11h7.34l.23.69.43 1.31H7.67zM7 11.51v-.01h10v3H7z" />
  </svg>
);

export { SvgGarage };
