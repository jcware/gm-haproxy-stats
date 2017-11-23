'use strict'

import { expect } from 'chai'
import { fetchCSV } from '../src/main'

global.fetch = require('node-fetch')
// const haproxyUrl = 'http://producao.geomais.com.br:8088/admin?stats'

describe('Haroxy Stats', () => {
  describe('Smoke Tests', () => {
    it('Should HaproxyStats have fetchCSV method', () => {
      expect(fetchCSV).to.be.a('function')
    })
  })

  describe('fetchCSV method', () => {
    it('should fetchCSV return a csv string', () => {
      // const stats = fetchCsv(haproxyUrl)
    })
  })
})
