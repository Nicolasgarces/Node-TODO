require('colors'); //importe del paquete

const { guardarDB } = require('./helpers/guardarArchivo');
const {inquirerMenu,
       pausa,
       leerInput
    } = require('./helpers/inquirer'); // se estan importando las funciones del archivo inquirer

const Tareas = require('./models/tareas');//importacion por defecto de la clase Tareas del archivo tareas




const main = async() => {

    let opt = '';
    const tareas = new Tareas(); //instancia Tareas

    do {
        //imprime el menú y retorna una opcion seleccionada 
        opt =  await inquirerMenu(); 
        
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
        
            case '2':
                console.log(tareas.listadoArr);
                break;
        }

        // guardarDB(tareas.listadoArr);


        await pausa();

    } while (opt !== '0');

}

main();