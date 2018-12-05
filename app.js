//Argumentos CMD
//node app --base=3
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

// let argv2 = process.argv
// let parametro = argv2[2];
// let base = parametro.split('=')[1];
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        //console.log(argv);
        //console.log(argv2);
        listarTabla(argv.base, argv.limite)
            .then(archivo => { console.log(`${archivo}`) })
            .catch(err => { console.log(err) });
        break;

    case 'crear':
        console.log('crear');
        //console.log(`Base: ${argv.base}\nLimite: ${argv.limite}`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`${archivo}`) })
            .catch(err => { console.log(err) });
        break;
    default:
        console.log('Comando no reconocido');
}



//console.log(module);