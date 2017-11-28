'use strict'
jest.mock('../src/request')
import { toArray, toJson, fetchCSV } from '../src/main'

// global.fetch = require('node-fetch')
const haproxyUrl = 'http://producao.geomais.com.br:8088/admin?stats;csv'
const dataCsvStr = '# \npxname,svname,\nhttp-in,FRONTEND,\nadmin,BACKEND,'
const aDataCsv = [ 'pxname,svname,', 'http-in,FRONTEND,', 'admin,BACKEND,' ]
const dataJson =  [ { pxname: 'http-in', svname: 'FRONTEND' },
                    { pxname: 'admin', svname: 'BACKEND' } ]

describe('Haroxy Stats', () => {
  describe('Smoke Tests', () => {
    it('Should HaproxyStats have toArray method', () => {
      expect(toArray).toBeDefined()
    })

    it('Should HaproxyStats have toJson method', () => {
      expect(toJson).toBeDefined()
    })

    it('Should HaproxyStats have fetchCSV method', () => {
      expect(fetchCSV).toBeDefined()
    })
  })

  describe('toArray method', () => {
    it('should strData be a string', () => {
      expect(() => toArray(1)).toThrow(TypeError, /strData must be a string/)
    })
    it('should strdata length be greater than 0', () => {
      expect(() => toArray('')).toThrow(Error, /strData length must be greater than 0/)
    })

    it('should toArray return an array', () => {
      expect(toArray(dataCsvStr)).toMatchObject(aDataCsv)
    })

    it('should remove item with value: #', () => {
      expect(toArray(dataCsvStr)).toMatchObject(aDataCsv)
    })

    it('shoud array´s length of the head be the same of the tail', () => {
      const haproxyArrayData = toArray(dataCsvStr)
      const head = haproxyArrayData[0].split(',')
      const tail = haproxyArrayData[1].split(',')
      expect(head.length).toBe(tail.length)
    })
  })

  describe('toJson method', () => {
    it('should toJson return a JSON object', () => {
      expect(toJson(dataCsvStr)).toMatchObject(dataJson)
    })
  })

  describe('fetchCSV method', () => {
    it('should fetchCSV return a JSON object', () => {
      expect.assertions(1)
      return fetchCSV(haproxyUrl)
      .then(data => {
        // console.log(data)
        expect(data).toMatchObject(dataJson)
      })
      .catch(e => {
        expect(e.message).toEqual('HAProxy server not found.')
      })
    })
    it('should catch err', () => {
      expect.assertions(0)
      return fetchCSV(haproxyUrl)
              .catch(e => {
                expect(e.message).toEqual('HAProxy server not found.')
              })
    })
  })
})
