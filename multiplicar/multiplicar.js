const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base '${base}' no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`el limite '${limite}' no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base} lim-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}