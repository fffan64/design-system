import type { SVGProps } from "react";

const SvgPerson2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zM9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26m.32-4.41C10.26 6.67 11.06 6 12 6s1.74.67 1.9 1.59l.32 2.41H9.78z" />
  </svg>
);

export { SvgPerson2 };
