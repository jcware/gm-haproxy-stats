import { fetchCSV } from '../src/main'
global.fetch = require('node-fetch')

const stats = fetchCSV('http://producao.geomais.com.br:8088/admin?stats;csv')
