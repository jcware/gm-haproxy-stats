'option strict'

import { expect } from 'chai'
import { fetchCsv } from '../src/main'

global.fetch = require('node-fetch')
// const haproxyUrl = 'http://producao.geomais.com.br:8088/admin?stats'

describe('Haroxy Stats', () => {
  describe('Smoke Tests', () => {
    it('Should HaproxyStats have fetchCsv method', () => {
      expect(fetchCsv).to.be.a('function')
    })
  })

  describe('fetchCsv method', () => {
    it('should fetchCsv return a csv string', () => {
      // const stats = fetchCsv(haproxyUrl)
    })
  })
})
