import { expect,test } from 'vitest'

import { foo } from '../src/index'

test('simple', () => {
  expect(foo).toBe('foo')
})
