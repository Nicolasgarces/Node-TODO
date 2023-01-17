const fs = require('fs');


const archivo = './db/data.json';

const guardarDB = (data) =>{

    fs.writeFileSync(archivo, JSON.stringify(data)); //escritura del archivo
    
}

const leerDB = () => {
    
    if (fs.existsSync(archivo)) { //lectura del achivo

    }


}

module.exports = {
    guardarDB
}