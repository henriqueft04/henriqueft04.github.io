import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://henriqueft04.github.io",
  base: "/henriqueteixeira.pwp",
  integrations: [tailwind()],
});
