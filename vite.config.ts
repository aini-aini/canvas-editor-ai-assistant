import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import * as path from 'path'

export default defineConfig(({ mode }) => {
  const name = 'ai_assistant'
  if (mode === 'lib') {
    return {
      plugins: [
        cssInjectedByJsPlugin({
          styleId: `${name}-style`,
          topExecutionPriority: true
        }),
        {
          ...typescript({
            tsconfig: './tsconfig.json',
            include: ['./src/ai_assistant/**']
          }),
          apply: 'build'
        }
      ],
      build: {
        sourcemap: true,
        lib: {
          name,
          fileName: name,
          entry: path.resolve(__dirname, 'src/ai_assistant/index.ts')
        },
        rollupOptions: {
          output: {
            globals: {
              '@hufe921/canvas-editor': 'CanvasEditor'
            }
          },
          external: ['@hufe921/canvas-editor']
        }
      }
    }
  }
  return {
    base: `/${name}/`,
    server: {
      host: '0.0.0.0'
    }
  }
})