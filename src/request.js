import fetch from 'node-fetch'

/* const request = (url) => {
  return new Promise(resolve => {
    http.get({path: url}, response => {
      let data = ''
      response.on('data', _data => (data += _data))
      response.on('end', () => resolve(data))
    })
  })
} */

const request = (url) => {
  return fetch(url, {mode: 'no-cors'})
}

export default request
