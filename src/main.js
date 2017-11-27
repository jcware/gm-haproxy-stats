'use strict'

const fetchCSV = (url, mode) => {

  return [ { pxname: 'http-in', svname: 'FRONTEND' },
           { pxname: 'admin', svname: 'BACKEND' } ]
}

const toArray = (strData) => {
  if (typeof strData !== 'string') {
    throw new TypeError('strData must be a string')
  }
  if (strData.length === 0) {
    throw new Error('strData length must be greater than 0')
  }

  return strData.split('\n').slice(1)
}

const toJson = (strData) => {
  const [head, ...tail] = toArray(strData)
  const fields = head.split(',')
  // console.log(fields)
  // let linesJson = []
  let strJson = tail.reduce((acc, atual, index, array) => {
    let line = atual.split(',').slice(0, -1)
    // let lineArray = line.map((lineItem, ind) => `${fields[ind]}: ${lineItem}`)
    // let lineJson = Object.assign({}, lineArray)
    // console.log('line: ', line)
    // console.log('lineArray: ', lineArray)
    // console.log('lineJson: ', lineJson)
    // linesJson.push(lineJson)
    return acc.concat('{' + line.map((lineItem, ind) => `"${fields[ind]}": "${lineItem}"`)).concat('},')
  }, '')
  strJson = '[' + strJson.slice(0, -1).replace(/'/g, '') + ']'

  return JSON.parse(strJson)
}

export { toArray, toJson, fetchCSV }
