global.fetch = require('node-fetch');
var stats = require('../lib/gm-haproxy-stats')

const req = stats.fetchCSV('http://producao.geomais.com.br:8088/admin?stats;csv')
req
   .then(data => console.log(data))
   .catch(e => console.log(e.message))

