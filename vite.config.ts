/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { readdirSync } from 'fs';
import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const srcPath = resolve('./src/');

const absolutePathAliases: { [key: string]: string } = {};

const srcRootContent = readdirSync(srcPath, { withFileTypes: true })
  .filter(({ name }) => name !== '.DS_Store')
  .map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ''));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = join(srcPath, directory);
});

export default defineConfig({
  // server: {
  //   host: 'localhost',
  //   https: true,
  //   port: 3000,
  // },
  build: {
    outDir: 'build',
  },
  plugins: [
    viteTsconfigPaths(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',
      manifest: {
        name: 'Podec Fiche de Fabrication',
        short_name: 'Podec Form',
        description: 'Podec form PWA build with React Vite and yarn ',
        theme_color: '#ffffff',
      },
    }),
  ],
});
