// REQUIRES

// const fs = require('fs'); // propia de node
// const fs = require('express');   // no existe nativamente en node, se instala y se utiliza
// const fs = require('./path');    // archivos propios en algun lugar de nuestro proyecto    

// const multiplicar = require('./multiplicar/multiplicar');

// const argv = require('yargs')
//     .command('listar', 'imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'crea la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const argv = require('./config/yargs').argv;
// const colors = require('colors');
const colors = require('colors/safe');


// const { crearArchivo } = require('./multiplicar/multiplicar');
// const { listarTabla } = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado`, colors.green(archivo)))
            .catch(e => console.log(e))
            // console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}
// console.log(argv);

// let base = 5;

// console.log(process); // objeto como el module

/* let data = '';

for (let i = 1; i <= 10; i++) {
    // console.log(`${base} x ${i} = ${base*i}`);
    data += (`${base} x ${i} = ${base*i}\n`);
}

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('tabla-2.txt', 'hola mundo', (err) => {
// fs.writeFile('tabla-2.txt', data, (err) => {
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`el archivo tabla-${base} ha sido creado!`);
}); */

// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv.base);
// console.log('limite', argv.limite);

// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado ${archivo}`))
//     .catch(e => console.log(e))