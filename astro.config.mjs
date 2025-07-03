import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  site: "https://your-portfolio-domain.com",
});
