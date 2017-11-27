import { fetchCSV } from '../src/main'

const stats = fetchCSV('http://producao.geomais.com.br:8088/admin?stats;csv')
stats
  .then(data => {
    console.log(data)
  })
  .catch(e => console.log(e.message))
