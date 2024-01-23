import million from 'million/compiler';
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [million.vite({
      mode: "react",
      server: true,
      auto: true
    })]
  },
  integrations: [tailwind(), react()]
});