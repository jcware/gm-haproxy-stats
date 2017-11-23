import { fetchCsv } from '../src/main'
global.fetch = require('node-fetch')

const stats = fetchCsv('http://producao.geomais.com.br:8088/admin?stats;csv')

stats.then(data => console.log(data))
