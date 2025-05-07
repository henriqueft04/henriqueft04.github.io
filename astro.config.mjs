import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://henriqueft04.github.io",
  base: "/henriqueteixeira.pwp",
  integrations: [tailwind(), icon()],
});
