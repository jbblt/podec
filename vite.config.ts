import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
      manifest: {
        name: "Podec Fiche de Fabrication",
        short_name: "Podec Form",
        description: "Podec form PWA build with React Vite and yarn ",
        theme_color: "#ffffff",
      },
    }),
  ],
});
