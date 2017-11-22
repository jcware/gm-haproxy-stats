'option strict'

import chai, { expect } from 'chai'
import { fetchCsv } from '../src/main'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

describe('Haroxy Stats', () => {

  describe('Smoke Tests', () => {
    it('Should HaproxyStats exist', () => {
      expect(fetchCsv).to.exist
    })
    it('Should HaproxyStats have fetchCsv method', () => {
      expect(fetchCsv).to.be.a('function')
    })
  })

  describe('fetchCsv method', () => {
    it('Should call a fetch function', () => {
      const stats = fetchCsv()

    })
  })
})
