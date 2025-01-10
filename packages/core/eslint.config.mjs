import createConfig, { Target } from '@infra/eslint-config/library.mjs'

export default [
  ...createConfig(Target.Browser),
]