/// <reference types="vitest/config" />
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.build.json"),
      entryRoot: "src",
      outDir: "dist",
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "DesignSystemFatec",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.ts"),
        icons: resolve(__dirname, "src/icons.ts"),
        "layout/index": resolve(__dirname, "src/layout/index.ts"),
        "navigation/index": resolve(__dirname, "src/navigation/index.ts"),
        "form/index": resolve(__dirname, "src/form/index.ts"),
        "data-display/index": resolve(__dirname, "src/data-display/index.ts"),
      },
      external: ["react", "react-dom", "lucide-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // Emite arquivos por entrada: index.es.js, icons.es.js, layout/index.es.js, etc.
        entryFileNames: "[name].[format].js",
        // Garante que o CSS seja gerado como styles.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "styles.css";
          }
          return assetInfo.name || "assets/[name][extname]";
        },
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});