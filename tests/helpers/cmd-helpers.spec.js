/* eslint-disable no-undef */
const { buildParams } = require('../../src/helpers/cmd-helpers')

describe('cmd-helpers', () => {
  describe('buildParams', () => {
    it('contains no params if none required or optional', async () => {
      const argv = { foo: 'bar' }
      const reqOptions = []

      const result = buildParams(argv, reqOptions)

      // Verify the output is correct
      expect(result.toString()).toEqual('')
    })

    it('contains required param foo', async () => {
      const argv = { foo: 'bar' }
      const reqOptions = ['foo']

      const result = buildParams(argv, reqOptions)

      // Verify the output is correct
      expect(result.toString()).toEqual('foo=bar')
    })

    it('returns null if required param missing', async () => {
      const argv = {}
      const reqOptions = ['foo']

      const result = buildParams(argv, reqOptions)

      // Verify the output is correct
      expect(result).toBe(null)
    })

    it('container optional params if present', async () => {
      const argv = { bar: 'baz' }
      const reqOptions = []
      const optOptions = ['bar']

      const result = buildParams(argv, reqOptions, optOptions)

      // Verify the output is correct
      expect(result.toString()).toBe('bar=baz')
    })

    it('container required & optional params if present', async () => {
      const argv = { bar: 'baz', foo: 'boo' }
      const reqOptions = ['foo']
      const optOptions = ['bar']

      const result = buildParams(argv, reqOptions, optOptions)

      // Verify the output is correct
      expect(result.toString()).toBe('foo=boo&bar=baz')
    })
  })
})
