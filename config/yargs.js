const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    default: 0,
    description: 'Base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    description: 'Muestra la tabla de multiplicar por consola'
  })
  .option('t', {
    alias: 'to',
    type: 'number',
    default: 10,
    description: 'Hasta qué número se multiplica la base'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La bse debe ser un número'
    }
    return true
  })
  .argv

module.exports = argv