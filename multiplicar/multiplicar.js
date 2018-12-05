const fs = require('fs');
const colors = require('colors');

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
            console.log(data);
        }


        fs.writeFile(`data/data-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`data-${base}.txt`);
            console.log('The file has been saved!');
        });
    });
}

listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';
        console.log('=================='.rainbow);
        console.log('=====  TABLA  ===='.green);
        for (let i = 1; i <= limite; i++) {
            data = `${base}*${i}=${base*i}\n`;
            console.log(data);
        }
        console.log('=================='.red);

    });
}



module.exports = {
    crearArchivo,
    listarTabla
}