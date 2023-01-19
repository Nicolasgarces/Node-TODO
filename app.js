require('colors'); //importe del paquete

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu,
       pausa,
       leerInput,
       listadoTareasBorrar,
       confirmar,
       mostrarListadoChecklist
    } = require('./helpers/inquirer'); // se estan importando las funciones del archivo inquirer

const Tareas = require('./models/tareas');//importacion por defecto de la clase Tareas del archivo tareas




const main = async() => {

    let opt = '';
    const tareas = new Tareas(); //instancia Tareas

    const tareasDB = leerDB();

    if (tareasDB){//cargar tareas
        tareas.cargarTareasFromArray( tareasDB)
    }

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
                tareas.listadoCompleto();
                break;

            case '3':
                tareas.listarPendientesCompletadas(true);
                break;

            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
           
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
           
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr);
                if (id !== '0'){
                    const ok =  await confirmar('¿Está seguro?');
                    if( ok ){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                break;
        }

        guardarDB(tareas.listadoArr);
        
        await pausa();
        
    } while (opt !== '0');

}

main(); 