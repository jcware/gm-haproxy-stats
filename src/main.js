import request from './request'

const fetchCSV = (url) => {
  return request(url)
          .then(dataText => toJson(dataText))
}

const toArray = (strData) => {
  if (typeof strData !== 'string') {
    throw new TypeError('strData must be a string')
  }
  if (strData.length === 0) {
    throw new Error('strData length must be greater than 0')
  }

  return strData.slice(2).split('\n')
}

const toJson = (strData) => {
  const [head, ...tail] = toArray(strData)
  const fields = head.split(',')
  // console.log('fields: ',fields)
  // console.log('tail: ', tail)
  // let linesJson = []
  let strJson = tail.reduce((acc, atual, index, array) => {
    let line = atual.split(',').slice(0, -1)
    //let lineArray = line.map((lineItem, ind) => `${fields[ind]}: ${lineItem}`)
    // let lineJson = Object.assign({}, lineArray)
    //console.log('line '+ index +' : ', line)
    //console.log('lineArray: ', lineArray)
    // console.log('lineJson: ', lineJson)
    // linesJson.push(lineJson)
    return acc.concat('{' + line.map((lineItem, ind) => `"${fields[ind].trim()}":"${lineItem.trim()}"`)).concat('},')
  }, '')
  strJson = '[' + strJson.slice(0, -1).replace(/'/g, '') + ']'

  return JSON.parse(strJson)
}

export { toArray, toJson, fetchCSV }
