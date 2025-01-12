import { expect,test } from 'vitest'

import { bar } from '../src/index'

test('simple', () => {
  expect(bar).toBe('bar')
})
