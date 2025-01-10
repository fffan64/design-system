/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    name: "look-and-feel",
    css: true,
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      include: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      exclude: [
        "src/**/*.{stories,test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "src/**/types.d.ts",
        "src/env.d.ts",
        "src/**/constants.ts",
        "src/**/index.{ts,tsx}",
      ],
      thresholds: {
        statements: 41,
        branches: 88,
        functions: 51,
        lines: 41,
      },
    },
  },
});