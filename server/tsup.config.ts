import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: 'cjs',
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  bundle: true,
  platform: 'node',
  target: 'node16',
  external: ['fs', 'path'],
});
