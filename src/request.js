'use strict'

const request = (url) => {
  return fetch(url, {mode: 'no-cors'})
}

export default request
