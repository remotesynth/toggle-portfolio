import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://toggle-portfolio.netlify.app/",
  output: "server",
  adapter: netlify()
});