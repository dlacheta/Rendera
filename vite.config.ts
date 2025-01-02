import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/main.tsx", // główny punkt wejścia Twojej paczki
      name: "rendera", // nazwa Twojej biblioteki
      fileName: (format) => `rendera.${format}.js`,
    },
    rollupOptions: {
      // Upewnij się, że te zależności są traktowane jako zewnętrzne
      external: ["react", "react-dom"],
      output: [
        {
          format: "es", // Format ES Modules
          entryFileNames: "rendera.es.js",
        },
        {
          name: "rendera",
          format: "umd", // Format UMD
          entryFileNames: "rendera.umd.js",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
        {
          format: "cjs", // Format CommonJS
          entryFileNames: "rendera.cjs.js",
        },
      ],
    },
  },
});
