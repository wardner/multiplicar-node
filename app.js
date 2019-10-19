//requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./configs/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.cyan(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('El comando no es reconocido');
}


// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(argv.base);
// console.log('Limite: ', argv.limite);