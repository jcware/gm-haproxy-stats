'use strict'

// const fetchCSV = (url, mode = {mode: 'no-cors'}) => {}

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
  const temp = tail.reduce((acc, atual, index, array) => {
    let line = atual.split(',').slice(0,-1)
    // console.log(line.map((lineItem, ind) => `"${fields[ind]}": "${lineItem}"`))
    return acc.concat('{'+ line.map((lineItem, ind) => `"${fields[ind]}": "${lineItem}"`)).concat('},')
  }, '')
  console.log(temp)

  return { 'pxname': 'http-in', 'backend': 'FRONTEND', 'admin': 'BACKEND' }
}

export { toArray, toJson }
