'use strict'

import { parse } from 'csv'

const fetchCSV = (url, mode = {mode: 'no-cors'}) => {
  fetch(
            url,
            mode)
          .then(data => data.text() )
          .then(data => parseCSV(data) )
          .catch(err => result = err)
}

const parseCSV = (data) => {
  let result = {}
  let arr = data.split('\n')
  console.log(arr[3])
}

export { fetchCSV }
