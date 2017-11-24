'use strict'

const fetchCSV = (url, mode = {mode: 'no-cors'}) => {
  fetch(url, mode)
          .then(data => data.text())
          .catch(err => err)
}

const splitLines = () => {}

export { fetchCSV, splitLines }
