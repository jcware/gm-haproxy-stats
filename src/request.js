/* global fetch */
const request = (url) => {
  const options = {
    method: 'get',
    headers: {'content-type': 'text/plain'},
    mode: 'no-cors'
  }
  return fetch(url, options).then(data => data.text())
}

export default request
