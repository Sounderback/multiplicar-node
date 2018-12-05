const option = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', option)
    .command('crear', 'crea el archivo de la tabla de multiplicar', option)
    .help()
    .argv;

module.exports = {
    argv
}