import type { SVGProps } from "react";

const SvgWaterDamage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m11.33 3.6-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0M12 16c-1.1 0-2-.9-2-2 0-.78.99-2.44 1.58-3.36.2-.31.64-.31.84 0 .59.92 1.58 2.58 1.58 3.36 0 1.1-.9 2-2 2" />
  </svg>
);

export { SvgWaterDamage };
