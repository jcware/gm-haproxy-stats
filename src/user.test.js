'use strict'

import * as user from './user'
jest.mock('./request')

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1)
  return user.getUserName(5)
    .then(data => expect(data).toEqual('Paul'))
})

it('works with resolves', () => {
  expect.assertions(1)
  return expect(user.getUserName(4)).resolves.toEqual('Mark')
})

// async/await can be used.
it('works with async/await', async () => {
  expect.assertions(1)
  const data = await user.getUserName(4)
  expect(data).toEqual('Mark')
})

// async/await can also be used with `.resolves`.
it('works with async/await and resolves', async () => {
  expect.assertions(1)
  await expect(user.getUserName(5)).resolves.toEqual('Paul')
})
