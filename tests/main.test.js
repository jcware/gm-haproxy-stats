'use strict'

import { expect } from 'chai'
import { toArray, toJson } from '../src/main'

// global.fetch = require('node-fetch')
// const haproxyUrl = 'http://producao.geomais.com.br:8088/admin?stats;csv'
const dataCsvStr = '# \npxname,svname,\nhttp-in,FRONTEND,\nadmin,BACKEND,'
const aDataCsv = [ 'pxname,svname,', 'http-in,FRONTEND,', 'admin,BACKEND,' ]
const dataJson =  [ { pxname: 'http-in', svname: 'FRONTEND' }, { pxname: 'admin', svname: 'BACKEND' } ]

describe('Haroxy Stats', () => {
  describe('Smoke Tests', () => {
    it('Should HaproxyStats have toArray method', () => {
      expect(toArray).to.be.a('function')
    })

    it('Should HaproxyStats have toJson method', () => {
      expect(toJson).to.be.a('function')
    })
  })

  describe('toArray method', () => {
    it('should strData be a string', () => {
      expect(() => toArray(1)).to.throw(TypeError, /strData must be a string/)
    })
    it('should strdata length be greter than 0', () => {
      expect(() => toArray('')).to.throw(Error, /strData length must be greater than 0/)
    })

    it('should toArray return an array', () => {
      expect(toArray(dataCsvStr)).to.be.eql(aDataCsv)
    })

    it('should remove item with value: #', () => {
      expect(toArray(dataCsvStr)).to.be.eql(aDataCsv)
    })
  })

  describe('toJson method', () => {
    it('should toJson return a JSON object', () => {
      expect(toJson(dataCsvStr)).to.be.eql(dataJson)
    })


  })
})
