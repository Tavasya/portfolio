import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
  plugins: [UnoCSS(), sveltekit()],
  server: {
    fs: {
      allow: [
        '.',  // Allow serving files from the project root
        './src',  // Allow serving files from the src directory
        './static',  // Allow serving files from the static directory
      ]
    }
  }
};

export default config;
