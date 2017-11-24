'use strict'

import { expect } from 'chai'
import { fetchCSV, splitLines } from '../src/main'

global.fetch = require('node-fetch')
// const haproxyUrl = 'http://producao.geomais.com.br:8088/admin?stats'

// retrieve datacsv from haproxy stats url
// split textDataCsv in lines
// isolate header from backend
// merge header with backends to contruct json object

describe('Haroxy Stats', () => {
  describe('Smoke Tests', () => {
    it('Should HaproxyStats have fetchCSV method', () => {
      expect(fetchCSV).to.be.exist
    })

    it('Should HaproxyStats have splitLines method', () => {
      expect(splitLines).to.be.exist
    })
  })

  describe('fetchCSV method', () => {
    it('should fetchCSV return a csv string', () => {
      // const stats = fetchCsv(haproxyUrl)
    })
  })
})
