'use strict'

const fetchCsv = (url) => {
  return fetch(
              url,
              {mode: 'no-cors'})
              .then(data => data.text())
}

export { fetchCsv }
