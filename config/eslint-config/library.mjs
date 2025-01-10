import { resolve } from 'node:path'
import globals from 'globals'
import base from './base.mjs'

const project = resolve(process.cwd(), 'tsconfig.json');

const Target = {
  Browser: 'browser',
  Node: 'node',
}

function createConfig(target) {
  return [
    ...base,
    {
      languageOptions: {
        parserOptions: {
          project,
        },

        globals: {
          ...(
            target === Target.Browser ? globals.browser : globals.node
          ),
          ...globals.es2021,
        }
      },
    }
  ]
}

export default createConfig
export {
  Target,
}