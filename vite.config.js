import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// cPanel deployment note:
// If deploying at root domain use base: '/'
// If deploying to a subfolder (e.g. https://domain.com/app) set base: '/app/'
// You can optionally set an env variable VITE_BASE_PATH before build.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
