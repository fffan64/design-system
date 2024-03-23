import type { SVGProps } from "react";

const SvgPerson3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10 10h4c.8 0 1.34-.94.76-1.63-.87-1.04-.26-2-.26-2.37 0-.41-.24-.77-.62-.92-.29-.12-.55-.31-.75-.54C12.96 4.33 12.58 4 12 4s-.96.33-1.13.53c-.2.24-.46.42-.75.54A1 1 0 0 0 9.5 6c0 .37.61 1.33-.26 2.37C8.66 9.06 9.2 10 10 10M17.48 16.34C16.29 15.73 14.37 15 12 15s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V18h12v-.78c0-.38-.2-.72-.52-.88"
      opacity={0.3}
    />
    <path d="M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zM10 12h4c1.66 0 3-1.34 3-3 0-.73-.27-1.4-.71-1.92.13-.33.21-.7.21-1.08a3 3 0 0 0-1.86-2.77C14 2.48 13.06 2 12 2s-2 .48-2.64 1.23A3 3 0 0 0 7.5 6c0 .38.08.75.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3m-.76-3.63c.87-1.04.26-2 .26-2.37 0-.41.24-.77.62-.92.29-.12.55-.31.75-.54.17-.21.55-.54 1.13-.54s.96.33 1.13.53c.2.24.46.42.75.54a1 1 0 0 1 .62.93c0 .37-.61 1.33.26 2.37.58.69.04 1.63-.76 1.63h-4c-.8 0-1.34-.94-.76-1.63" />
  </svg>
);

export { SvgPerson3 };
