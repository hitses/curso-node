const fs = require('fs')
const colors = require('colors');

const crearArchivo = async (base, list, to) => {
  try {
    let salida = `Tabla del ${base}
================
`

    for (let i = 0; i <= to; i++) {
      salida +=`${base} x ${i} = ${base*i}\n`
    }

    if (list) console.log(salida)

    fs.writeFileSync(`tables/Tabla del ${base}.txt`, salida)

    return (`Tabla del ${base} hasta el ${to} ` + 'guardada'.green)
  } catch (err) {
    throw err
  }
}

module.exports = {
  crearArchivo
}