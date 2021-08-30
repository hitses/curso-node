const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

const {base, list, to} = argv

crearArchivo(base, list, to).then(
  fileName => console.log(fileName)
).catch(
  err => console.log(err)
)