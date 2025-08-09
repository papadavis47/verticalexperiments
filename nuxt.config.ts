import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false, // Remove path prefix from component names
    },
  ],
  image: {
    provider: "vercel",
    quality: 80,
    format: ["webp", "jpeg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      xxxl: 2048,
    },
    densities: [1, 2],
  },
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/image"],
});
