import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/weather/" : "/",
  plugins: [react(), tsconfigPaths(), checker({ typescript: true, stylelint: false })],
}));
