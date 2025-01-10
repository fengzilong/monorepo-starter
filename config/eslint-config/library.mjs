import globals from 'globals'
import base from './base.mjs'

const Target = {
  Browser: 'browser',
  Node: 'node',
}

function createConfig(target) {
  return [
    ...base,
    {
      languageOptions: {
        globals: {
          ...(
            target === Target.browser ? globals.browser : globals.node
          ),
          ...globals.es2022,
        }
      },
    }
  ]
}

export {
  createConfig,
  Target,
}